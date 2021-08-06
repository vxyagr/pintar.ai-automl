import base64
from Crypto.Cipher import AES
from Crypto.Hash import SHA256
from Crypto import Random
from model import DB

class Security:
    key_aes= "!>en6a3a+P!n+4%*"
    
    def __init__(self):
        return
    
    def validate_password(self, user_id, password):
        db = DB()
        ret_message = dict()
        user_info = db.get_password(user_id)
        encrypted = self.encrypt(password)
        pass_db_encrypted = user_info['password']
        if pass_db_encrypted == encrypted:
            ret_message['code'] = 'security-0'
            ret_message['description'] = 'Succeed'
            ret_message['user_information'] = user_info
        else:
            ret_message['code'] = 'security-1'
            ret_message['description'] = 'Wrong user/password, please try again'
        return ret_message
 
    def encrypt(self, source, encode=True):
        obj = AES.new(self.key_aes, AES.MODE_ECB)
        password = source
        length_pass=len(password)
        length_pass2=32-length_pass
        print(length_pass2)
        s = ""
        for i in range(length_pass2):
            s+="*"
        message2 = password+s
        ciphertext = obj.encrypt(message2)
        base64_enc = base64.b64encode(ciphertext).decode('utf-8')

        return base64_enc