import os
import os.path
import time
import hashlib
import MySQLdb
from swiftclient.shell import *
from com_fm import *

AndroidPhonePath = "/var/www/SAWeb/static/upload_tmp/AndroidPhone.tar.gz"
FileLocaltion = "/var/www/SAWeb/static/upload_tmp/AllApks"
OdexLocation = "/var/www/SAWeb/static/upload_tmp/AllOdexes"
FrameLocation = "/var/www/SAWeb/static/upload_tmp/frame"
Frameworkgz = "/var/www/SAWeb/static/upload_tmp/framework.tar.gz"
Frame_id_file = "/var/www/SAWeb/static/upload_tmp/framework_id.txt"
Log_file = "/var/www/SAWeb/static/upload_tmp/log.txt"

COMM_host = "172.18.100.15"
COMM_user = "android_manual"
COMM_passwd = "android_manual"
COMM_db = "varas_softwares"

ANDROID_host = "172.18.205.203"
ANDROID_user = "mo_software"
ANDROID_passwd = "ndrc10_insp"
RES_db = "insp_db_130"
INSP_db = "insp_db_130"

log_f = ''

def Get_File_MD5(filePath):
    fh = open(filePath, 'rb')
    m = hashlib.md5()
    while True:
        data = fh.read(8192)
        if not data:
             break
        m.update(data)
    fh.close()
    value = m.hexdigest()
    log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Get "+ filePath  +" MD5 is "+ str(value)  + "\n")
    return value
    

def Get_YMDHMS(millsecond):
        pysecond = millsecond/1000
        return time.strftime("%Y/%m/%d %H:%M:%S", time.localtime(pysecond))

def Update_database(Detail_info, Apk_Odex_Frame_info):
    print "-------------------in Update_database-------------------"
    try:
        COMM_conn = MySQLdb.connect(host = COMM_host, user = COMM_user, 
                                    passwd = COMM_passwd, db = COMM_db, 
                                    charset="utf8")
        print "---------------pass COMM------------------"
        COMM_cur = COMM_conn.cursor()
        ANDROID_conn = MySQLdb.connect(host = ANDROID_host, 
                                       user = ANDROID_user,
                                       passwd = ANDROID_passwd,
                                       db = RES_db, charset="utf8")
        print "---------------pass ANDROID------------------"
        ANDROID_cur = ANDROID_conn.cursor()
                
        values = [] 
        for info in Detail_info:
            values.append((info['app_name'], info['app_md5'], 
                   info['app_version'],info['sdk_version'],info['permissions'], 
                   info['custom_permissions'], info['app_activity'],
                   info['app_service'], info['app_provider'],
                   info['app_package'], info['last_update_date'],
                   info['firtst_install_time'], info['path']))
        
        COMM_sql =           "insert into android_upload(app_name, app_md5,app_version,sdk_version,permissions,custom_permissions, app_activity, app_serivce, app_provider, app_package, last_update_date, firtst_install_time, path) values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        ANDROID_sql = "insert into spider_app_download(app_name, app_md5, app_version,sdk_version, permissions, custom_permissions, app_activity, app_serivce, app_provider, app_package, last_update_date, firtst_install_time, path) values(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        rela_values = []
        for info in Apk_Odex_Frame_info:
            rela_values.append((info['app_path'], info['app_odex'],
                        info['framework'], info['framework_id'],
                        info['framework_tar']))
        rela_sql = "insert into inner_app_conf(app_path, app_odex,framework, framework_id, framework_tar) values(%s, %s, %s, %s, %s)"
        print"------------operation database----------------"
        COMM_cur.executemany(COMM_sql, values)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": Insert Datas to android_manual table" + "\n")
        COMM_conn.commit()
        ANDROID_cur.executemany(ANDROID_sql, values)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": Insert Datas to spider_app_download table" + "\n")
        ANDROID_conn.commit()
        ANDROID_cur.executemany(rela_sql, rela_values)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": Insert Datas to inner_app_conf table" + "\n")
        ANDROID_conn.commit()
        COMM_cur.close()
        COMM_conn.close()
        ANDROID_cur.close()
        ANDROID_conn.close()
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + str(e) + "\n")
        

    return 'success'

    
def Get_Detail_Apk():
   
    print "---------in Get Detail Apk--------"
    
    try:
        tarfile = 'tar zxvf ' + AndroidPhonePath + ' -C /var/www/SAWeb/static/upload_tmp' 
        os.system(tarfile)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ": Extracting the AndroidPhone.tar.gz" + "\n")
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ": " + str(e) + "\n")
        print e 
    print "----------after tar-----------------------------" 
    Detail_info = []
    Apk_Odex_Frame_info = []
    op = com_fm("android_pipeline")

    Apk_file = {}
    Txt_file = []
    try:
        for parent, dirnames, filenames in os.walk(FileLocaltion):
            for filename in filenames:
                if '.apk' in filename:
                    key = FileLocaltion+ "/" +filename
                    value = Get_File_MD5(FileLocaltion+ "/" +filename) + '.apk'
                    print "--------------", op.upload(key,value), '-------------'
                
                    Apk_file[key] = value
                    print "-----------apk--size--------------",len(Apk_file)
                else:
                    Txt_file.append(FileLocaltion+ "/" +filename)
                    print "-----------txt--size--------------",len(Txt_file)
        
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ":Complete Apk_file" + "\n")
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ":Complete Txt_file" + "\n")
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ": " + str(e) + "\n")
        print e 
              
    Odex_file = {}
    try:
        for parent, dirnames, filenames in os.walk(OdexLocation):
            for filename in filenames:
                key = OdexLocation + '/' + filename
                value = Get_File_MD5(OdexLocation + "/" +filename) + '.odex'
                print "--------------", op.upload(key,value), '-------------'
                Odex_file[key] = value
                print "-----------odex--size--------------",len(Odex_file)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Complete Odex_file" + "\n")
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) + ": " + "\n")
        print e
    
    Frame_file = {}
    try:
        for parent, dirnames, filenames, in os.walk(FrameLocation):
            for filename in filenames:
                key = FrameLocation+ "/" +filename
                value = Get_File_MD5(FrameLocation+ "/" +filename) + '.apk'
                print "--------------", op.upload(key,value), '-------------'
                Frame_file[key] = value
                print "-----------frame--size--------------",len(Frame_file)
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Complete Frame_file" + "\n")
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": " + str(e) + "\n")
        print e

    Frame_id = {}
    try:
        f_id = open(Frame_id_file, 'rb')
        content = f_id.read()
        content_list = content.split("\n")
        for item in range(len(content_list) - 1):
            item_list = content_list[item].split(":")
            print "------------framework id-----------", item_list
            Frame_id[item_list[0]] = item_list[1]
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Complete Frame_id" + "\n")
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": " + str(e) + "\n")
        print e
    try:
        Framework_targz = Frameworkgz
        Framework_path=Get_File_MD5(Framework_targz) + '.tar.gz'
        print "--------------", op.upload(Framework_targz,Framework_path), '-------------'
    except Exception, e:
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +": " + str(e) + "\n")
        print e    
            
    for item in Txt_file:
        key = item.replace('txt', 'apk')
        txtfile = open(item, 'rb')
        content = txtfile.read()
        content_list = content.split("\r\n")
        Dic_Detail_info = {}
        Dic_Detail_info['app_name'] = (content_list[0].split(":"))[1]
        Dic_Detail_info['app_md5'] = Apk_file[key].replace('.apk', '')
        Dic_Detail_info['app_version'] = (content_list[1].split(":"))[1]
        Dic_Detail_info['permissions'] = (content_list[2].split(":"))[1]
        Dic_Detail_info['custom_permissions'] = (content_list[4].split(":"))[1]
        Dic_Detail_info['app_activity'] = (content_list[3].split(":"))[1]
        Dic_Detail_info['app_service'] = (content_list[5].split(":"))[1]
        Dic_Detail_info['app_provider'] = (content_list[6].split(":"))[1]
        Dic_Detail_info['app_package'] = (content_list[7].split(":"))[1]
        Dic_Detail_info['last_update_date'] = Get_YMDHMS(
                                int((content_list[8].split(":"))[1]))
        Dic_Detail_info['firtst_install_time'] = Get_YMDHMS(
                                int((content_list[9].split(":"))[1]))
        Dic_Detail_info['sdk_version'] = (content_list[10].split(":"))[1]
        Dic_Detail_info['path'] = Apk_file[key]
        Detail_info.append(Dic_Detail_info)
    log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Complete Detail_info " + "\n")
    for apk_item in Apk_file.keys():
        odex_key = (apk_item.replace('AllApks', 'AllOdexes')).replace('apk', 'odex')
        for frame_item in Frame_file.keys():
            Apk_Odex_Frame = {}
            Apk_Odex_Frame['app_path'] = Apk_file[apk_item]
            if odex_key not in Odex_file.keys():
                Apk_Odex_Frame['app_odex'] = ""
            else:
                Apk_Odex_Frame['app_odex'] = Odex_file[odex_key]
            Apk_Odex_Frame['framework'] = Frame_file[frame_item]
            item_list = frame_item.split('/')
            item_list_key = item_list[len(item_list) - 1]
            print "-----------item_list_key------------", item_list_key
            Apk_Odex_Frame['framework_id'] = Frame_id[item_list_key]
            Apk_Odex_Frame['framework_tar'] = Framework_path
            Apk_Odex_Frame_info.append(Apk_Odex_Frame) 
    #print "------------Apk Odex Frame info--------", Apk_Odex_Frame_info
    print "------------Apk Odex Frame info len--------",len(Apk_Odex_Frame_info)
    log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":Complete Apk_Odex_Frame_info " + "\n")
    Update_database(Detail_info, Apk_Odex_Frame_info)
   
            
if __name__ == '__main__':
    print "-------------------in main----------------"
    try:
        log_f = open(Log_file, "a")
        log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":start upload data" + "\n") 
    except Exception ,e:
        print e
    Get_Detail_Apk()
    log_f.write(time.strftime('%Y-%m-%d:%H:%m:%s',time.localtime(time.time())) +":complete upload data" + "\n") 
    log_f.close()
    
    RMApks = "rm -rf " + FileLocaltion
    RMOdexes = "rm -rf " + OdexLocation
    RMFrame = "rm -rf " + FrameLocation
    RMFrametargz = "rm -rf " + Frameworkgz
    RMFrame_id = "rm -rf " + Frame_id_file
    RMAndroidPhone = "rm -rf " + AndroidPhonePath 
    os.system(RMApks)
    os.system(RMOdexes)
    os.system(RMFrame)
    os.system(RMFrametargz)
    os.system(RMFrame_id)
    os.system(RMAndroidPhone)
   


