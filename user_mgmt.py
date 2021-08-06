from flask import  Flask, request, redirect, url_for, render_template, jsonify, Response, abort, session
from model import DB 
import random, string, subprocess
from crypto import Security
import settings as s


class UserManagement():

    ret_message = dict()

    def __init__(self):

        return

    def get_quota_left(self, user_id):
        db = DB()
        result = db.get_quota_left(user_id)
        return result
    
    def generate_user_session(self):
        x = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for _ in range(20))
        
        return x

    def register_user(self, name, organization, email, password):
        import subprocess as sb, os
        user_id = email
        security = Security()
        password_enc = security.encrypt(password)
        logged_in = 0
        name = name 
        organization = organization
        session_name = self.generate_user_session()

        db = DB()
        register = db.register_user(user_id, password_enc, logged_in, name, organization, session_name)

       
        if register == "1":
            # self.create_folder(folder_name='', session_name=session_name, quota='10', is_home_folder=True)
            self.ret_message['description'] = 'OK'
        elif register == "2":
            self.ret_message['description'] = 'FAIL'
        elif register == "3":
            self.ret_message['description'] = 'EXIST'
        else:
            pass
        return self.ret_message

    def create_folder(self, folder_name, session_name, quota='0', is_home_folder=False):
        hdfs_user = s.hdfs_user
        hdfs_host = s.hdfs_host
        remote_username = s.remote_username
        remote_host = s.remote_host
        remote_user_folder = s.remote_user_folder
        local_user_folder = s.local_user_folder
        
        if is_home_folder:
            subprocess.call(["mkdir", local_user_folder + session_name])
            subprocess.call(["ssh","root@" + remote_host, "adduser", session_name])
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, 'hdfs dfs -mkdir /user/' + session_name])
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, '/bin/hdfs dfsadmin -setSpaceQuota '+ quota + 'G /user/' + session_name])
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, 'hdfs dfs -mkdir /user/' + session_name + '/models'])
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, 'hdfs dfs -chown -R ' + session_name + ':' + session_name + ' /user/' + session_name + '/models'])
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, '/bin/hadoop fs -setfacl -m -R user:' + session_name +':rwx /user/' + session_name])
            
            subprocess.call(["mkdir", local_user_folder + session_name])
            subprocess.call(["ssh", remote_username + "@" + remote_host, "mkdir", remote_user_folder + session_name])

        else:
            subprocess.call(["ssh", hdfs_user + "@" + hdfs_host, 'hdfs dfs -mkdir /user/' + session_name + '/' + folder_name])


    def get_user_projects(self, user_id):
        db = DB()
        result = db.get_user_projects(user_id)
        
        return result

    def update_quota(self, user_id, core_use, memory_use):
        db = DB()
        result = self.get_quota_left(user_id)

        core_left = result['core_left']
        memory_left = result['memory_left']
        core_used = 0
        memory_used = 0
        if core_use > core_left:
            message = ''
        else:
            core_left = core_left - core_use
            memory_left = memory_left - memory_use

            core_used = core_used + core_use
            memory_used = memory_used + memory_use

        return