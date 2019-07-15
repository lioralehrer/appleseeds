from bottle import run, route, static_file

@route("/")
def get_app():
    return static_file("index.html", root="static")

@route('/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')
    
if __name__ == "__main__":
    run(host='localhost',port=7000, debug=True, reloader=True)    