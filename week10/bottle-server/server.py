from bottle import route, run,static_file


@route('/hello')
def hello():
    return 'Hello world'

@route('/index')
def index():
    return static_file("index.html",root="")

# run(host='localhost', port=7000, debug=True, reloader=True)
