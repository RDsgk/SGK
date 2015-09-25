#! /usr/bin/python
# -*- coding: utf8 -*- 
from django.contrib.auth import authenticate, login,logout
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import User
from django.shortcuts import render_to_response
from elasticsearch import Elasticsearch
import platform
from collections import OrderedDict
import requests
from django.contrib.auth.decorators import login_required
from search.models import search_count
from django.db.models import Count
import simplejson
from datetime import *

#主页
def mainpage(request):
    user_list=User.objects.all()
    a=datetime.now()
    b=search_count.objects.filter(date=a).order_by('-id')[:10] 
    #判断用户登陆状态
    if request.user in user_list:
	return render_to_response("main.html", {"tplfile":"search.html", "username": request.user,"record":b})
    else:
        return render_to_response('login.html', {})

#用户退出
def log_out(requset):
    logout(requset)
    return render_to_response('login.html', {})

#用户登录
def log(request):
    #获取用户用户名、密码
    user_name=request.POST.get("username")
    password=request.POST.get("password")
    user = authenticate(username=user_name, password=password)
    user_list=User.objects.all()
    a=datetime.now()
    b=search_count.objects.filter(date=a).order_by('-id')[:10]
    if user is None:
	if not request.user.is_active:
	    return render_to_response('login.html', {})
	else:
	    user=request.user
	    return render_to_response("main.html", {"tplfile":"search.html", "username": request.user,"record":b})
    elif user.is_active:
	login(request,user)
  	return render_to_response("main.html", {"tplfile":"search.html", "username": user_name,"record":b})
#搜索
def search(request):
    #获取查询关键字
    text = request.POST.get('search_content')
    #建立连接
    es = Elasticsearch([{'host':'10.10.20.26','port':9200}])
    #调用es-py API 根据用户名密码查询，限制查询条数<50
    print text
    #定义查询类型,从前台页面获取
    querytype = 'email'
    print type(querytype)
    if querytype == 'username':
   	 #基于用户名查询
   	 searchResult = es.search(index='_all',body={"query":{"term":{'username':text}},"size":50})
    elif querytype == 'email':
   	 #基于邮箱查询
   	 searchResult = es.search(index='_all',body={"query":{"term":{'email':text}},"size":50})
    elif querytype == 'password':
   	 #基于密码查询  
   	 searchResult = es.search(index='_all',body={"query":{"term":{'password':text}},"size":50})
   # elif querytype == 'multi':
	 # 多字段检索
#	searchResult = es.search(index='_all',body={"multi_match":{"query":text,"fields":["username","email"]}})	
    #搜索结果list
    search_list=[]
    #搜索集合list
    collection_list=[]
    #数据源list
    source_list=[]
    #获取搜索结果
    a= searchResult['hits']
    b=a['hits']
    for i in range( len(b)):
 	c=b[i]['_source']
	t=b[i]['_index']
	search_list.append(c)
	collection_list.append(t)
    #获取数据源
    for element in collection_list:
	targetSource = es.search(index='collectionlist',body={"query":{"match":{'collectionName':element}}})
	deal1 = targetSource['hits']
	deal2 = deal1['hits']
	for j in range( len(deal2)):
		deal3 = deal2[j]['_source']
		deal4 = deal3['source']
		print(deal4)
		source_list.append(deal4)
	
    ccc=search_count(user=request.user,content=text)
    ccc.save()
    #返回查询结果和数据源信息
    return render_to_response("main.html",{"tplfile":"search_done.html","username":request.user,"list":search_list,"source_list":source_list})

#统计信息
@login_required
def statistic(request):
    #SGK内部数据信息
    '''
    a=search_count.objects.values('date').annotate(dcount=Count('date'))
    print "test"
    print a[0]['date'].isoformat()
    count_list=[]
    interval=7
    for i in range(0,len(a)):
 	item={}
	if i%interval==0:
	    item['date']=a[i]['date'].isoformat()
	else:
	    item['date']=""
	item['number']=a[i]['dcount']
	count_list.append(item)
    date=[{'count_data':count_list}]
    '''
    return render_to_response("main.html",{"tplfile":"statistics.html","username":request.user})

def cccc(request):
    a=search_count.objects.values('date').annotate(dcount=Count('date'))
    print a
    count_list=[]
    interval=1
    for i in range(0,len(a)):
        item={}
        if i%interval==0:
            item['date']=a[i]['date'].isoformat()
        else:
            item['date']=""
        item['number']=a[i]['dcount']
        count_list.append(item)
    print count_list
    date=[{'count_data':count_list}]
    json=simplejson.dumps(date)
    return HttpResponse(json)

#内部数据统计信息
@login_required
def date_info(request):
    #SGK内部数据信息
    infoInSGK = {'51CTO':'3168270','暴风BBS':'625867','17173':'16765965','test':'8923823'}
    print type(infoInSGK)
    return render_to_response("main.html",{"tplfile":"date_info.html","username":request.user})

#服务器信息
@login_required
def server_status(request):
    sysprocessor = platform.processor()
    sys = platform.system()
    ostype = platform.dist()[0]
    hostname = platform.node()
    #系统基本信息
    sysinfo = [sysprocessor,sys,ostype,hostname]
    print "基本信息 %s" %(sysinfo)
    print type(sysinfo)
    #es集群状态信息
    esClusterInfo = requests.get('http://10.10.20.26:9200').content
    print "集群基本状态 %s" %(esClusterInfo)
    #cpu信息
    print type(esClusterInfo)
    with open('/proc/cpuinfo') as f:
	for line in f:
		if line.strip():
			if line.rstrip('\n').startswith('model name'):
				cpuName = line.rstrip('\n').split(':')[1]
    print(cpuName)
    #内存信息
    meminfo = OrderedDict()
    with open('/proc/meminfo') as f:
	for line in f:
		meminfo[line.split(':')[0]] = line.split(':')[1].strip()
    memtargetinfo = [meminfo['MemTotal'],meminfo['MemAvailable'],meminfo['MemFree']]
    print(memtargetinfo)
    return render_to_response("main.html", {"tplfile":"server_status.html", "username":request.user,'sysinfo':sysinfo,'esClusterInfo':esClusterInfo,'cpuName':cpuName,'memtargetinfo':memtargetinfo})
