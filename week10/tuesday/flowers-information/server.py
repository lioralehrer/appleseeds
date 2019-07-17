from bottle import run , route,static_file
import json
images=[{"src": "./images/nuphar.jpg","description":"aaa"},
{"src": "./images/calamintha.jpg","description":"bbb"},
{"src": "./images/rose.jpg","description":"ccc"}]

@route('/')
def start_app():
    return static_file('index.html',root="static")
@route('/get_flowers')
def get_flowers():
    return json.dumps(images)


# This will serve any file in your static directory :
@route('/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')

if __name__ == "__main__":
    run(host='localhost', port='7001',debug=True,reloader=True)    