from bottle import run, route,get,post,redirect,request,response,template
import pymysql
import uuid
import hashlib
connection = pymysql.connect(user='root', password='liora', db='store',
                             charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)


@get("/lucky_num")
def requiers_login(handler_method):
    def lucky_num():
        return """<h1>Your lucky num is:{} </h1>"""

def requiers_login(handler_method):
    def check_login(*args):
        if not user_is_logged():
            redirect("/login?next_url="+request.path)
        else:
            return handler_method(*args)
    return check_login

def user_is_logged():
    nickname_from_cookie = request.get_cookie("nickname")
    session_from_cookie = request.get_cookie("session_id")
    with connection.cursor()as cursor:
        query = "select * from user where nickname = %s and session_id = %s"
        cursor.execute(query,(nickname_from_cookie,session_from_cookie))
        result = cursor.fetchall()
        return result
@get("/login")
@post("login")
def login():
    if request.method == "POST":
        return handle_login()
    else:
        requested_url = request.GET.get("next_url","/")
        context = {"next_url": requested_url,"err_msg":""}
        return template("templates/login.html", **context)
def handle_login():
    nickname = request.forms.get("nickname")
    user_password = request.form.get("password")
    requested_url = request.forms.get("next_url")
    user_verified = verify_user(nickname, user_password)
    if user_verified:
        redirect(requested_url)
    else:
        context = {"next_url": requested_url,"err_msg":"wrong nickname or password"}    
        return template("templates/login.html",**context)
def verify_user(nickname,user_password):
    hashed_password = hash_pass(user_password)
    with connection.cursor() as cursor:
        query = "select * from users where nickname = %s and password = %s"
        cursor.execute(query,(nickname, user_password))
        result = cursor.fetchone()
        if result:
            update_user_session_id(nickname, hashed_password)
            return True
        return False
def hash_pass(password):
    salt="xxlh123"
    return hashlib.md5(salt+password).encode('utf-8').hexdigest()        
def update_user_session_id(nickname, hashed_password):
    session_id = srt(uuid4().hex)[:8]
    with connection.cursor()as cursor:
        query = "update users set session_id = %s where nickname=%s and password = %s"
        cursor.execute(query, (session_id,nickname,hashed_password))
        connection.commit()
    response.set_cookie("session_id", session_id)
    response.set_cookie("nickname",nickname)                    

if __name__ == "__main__":
    run(host='localhost', port='7000', debug=True, reloader=True)