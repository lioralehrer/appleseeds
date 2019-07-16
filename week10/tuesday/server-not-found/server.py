from bottle import run, route, static_file,response,abort

@route("/")
def error_handler():
    return abort(404,'page not found')
@route("/error01")    
def error_handler01():
    return abort(500,'internal server error')
@route("/error02")
def get_app():
    return static_file("error.html", root="static")
# This will serve any file in your static directory :
@route('/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')

if __name__ == "__main__":
    run(host='localhost',port=7002, debug=True, reloader=True) 