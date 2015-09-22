from swiftclient.shell import *
import os
import time
import sys
import random


#LOCAL_STORAGE_PATH = '/root/test-swift/test/'
LOCAL_STORAGE_PATH = '/run/shm/'


SWIFT_CONTAINER_NUM = 100
SWIFT_AUTHURL='http://172.18.203.11:5000/v2.0/'
SWIFT_USER='android:android'
SWIFT_KEY='111111'
SWIFT_OS_OPTIONS={'region_name': None, 'tenant_id': None, 'auth_token': None, 'endpoint_type': None, 'tenant_name': None, 'service_type': None, 'object_storage_url': None}
SWIFT_PROXY_1 = '172.18.202.21:8080'
SWIFT_PROXY_2 = '172.18.202.22:8080'
SWIFT_LBS = '172.18.202.11:8000'
SWIFT_PROXY = SWIFT_PROXY_2

RETRY_NUM = 5

swift_functions = {}



def upload_apk_by_swift(conn,container,obj,filepath):
    put_headers = {'x-object-meta-mtime': "%f" % getmtime(filepath)} 
    file_length = os.path.getsize(filepath)
    res = -1
    upload_count = 0
    while (upload_count < RETRY_NUM):
        try:
            etag = conn.put_object(container, obj, open(filepath, 'rb'),content_length=file_length, headers=put_headers)
            if (etag != obj.split('.')[0]):
                upload_count += 1
                time.sleep(2)
                continue
            res = file_length
            break 
        except Exception  as err:
            print err
            upload_count +=1
            time.sleep(2)
            continue
    return res

def download_apk_by_swift(conn,container,obj,filepath):
    res = -1
    download_count = 0
    while(download_count < RETRY_NUM):
        try:
            headers, body = conn.get_object(container, obj, resp_chunk_size=65536)
            fp = open(filepath,"w+")
            file_len = 0
            for chunk in body:
                fp.write(chunk)
                file_len+=len(chunk)
            fp.close()
            if (file_len == int(headers['content-length'])):
                res=file_len
                break
            else:
                print "download_apk_by_swift err,file_len not match"
                download_count += 1
                time.sleep(2)
                continue
        except Exception as e:
            print "download_apk_by_swift err,",e
            download_count += 1
            time.sleep(2)
            continue
    return res

def swift_android_upload(conn,argv):
    filepath = argv[0]
    md5_filename = argv[1]
    filehash = md5_filename.split('.')[0]
    container_name = str(int(filehash,16)%SWIFT_CONTAINER_NUM)
    res = upload_apk_by_swift(conn,container_name,md5_filename,filepath)
    if(res == -1):
        return -1
    else:
        return 0


def swift_android_download(conn,argv):
    md5_filename = argv[0]
    filepath = argv[1]
    filehash = md5_filename.split('.')[0]
    container_name = str(int(filehash,16)%SWIFT_CONTAINER_NUM)
    res = download_apk_by_swift(conn,container_name,md5_filename,filepath)
    if (res == -1):
        return -1
    else:
        return 0


def swift_android_stat(conn,argv):
    md5_filename = argv[0]
    return 0 

def swift_varas_upload(conn,argv):
    pass

def swift_varas_download(conn,argv):
    pass

def swift_varas_stat(conn,argv):
    pass




swift_functions['android_pipeline'] = {'upload':swift_android_upload,'download':swift_android_download,'stat':swift_android_stat}
swift_functions['varas'] = {'upload':swift_varas_upload,'download':swift_varas_download,'stat':swift_varas_stat}





# storage_type: "android_pipeline","varas-ra"
#for "android_pipeline": 
#op.download(app_name,app_path):download app
#app_name is the md5name of app,like FFFFF.apk, app_path is the path for app to save in local file system
#op.upload(app_path,app_name):upload app
#op.stat(app_name):get app info
class Swift_Op():
    def __init__(self,storage_type):
        self.swift_conn = Connection(authurl=SWIFT_AUTHURL,user=SWIFT_USER,key=SWIFT_KEY,retries=5,auth_version='2',os_options=SWIFT_OS_OPTIONS,snet=False,cacert=None,insecure=False,ssl_compression=True)
        self.function = swift_functions[storage_type]
        #print(self.function)

    def upload(self,*argv):
        return self.function['upload'](self.swift_conn,argv)

    def download(self,*argv):
        print("argv is ",argv)
        #print self.function
        #print(argv[1:])
        return self.function['download'](self.swift_conn,argv)

    def stat(self,*argv):
        return self.function['stat'](self.seift_conn,argv)
        

class com_fm(Swift_Op):
    pass

if __name__ == '__main__':
    test_conn = Connection(authurl=SWIFT_AUTHURL,user="admin:admin",key="admin_pass",retries=5,auth_version='2',os_options=SWIFT_OS_OPTIONS,snet=False,cacert=None,insecure=False,ssl_compression=True)
    #op = Swift_Op("android_pipeline")
    op = com_fm("android_pipeline")
    filepath="/run/shm/ttt"
    #res = op.download("012004e96f714b49b2cd27ecf941a470.apk")
    res = op.download("012004e96f714b49b2cd27ecf941a470.apk",filepath)
    #res = op.upload("/run/shm/ttt.apk")
    put_headers = {'x-object-meta-mtime': "%f" % getmtime(filepath)}
    ttt = test_conn.put_object("test", "ttt.apk", open(filepath, 'rb'),content_length=os.path.getsize(filepath), headers=put_headers)
    if (ttt=="012004e96f714b49b2cd27ecf941a470"):
        print("success upload")
    print(res)
    print(ttt)

