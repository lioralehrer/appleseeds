from bottle import run, route, static_file
import json
import random

people = [ {"name": "John", "age": "31", "city": "New York"},
{"name": "Sem", "age": "21", "city": "London"},
{"name": "Liana", "age": "11", "city": "Tel Aviv"},
{"name": "Tzvi", "age": "13", "city": "Beit Shemesh"},
{"name": "Tapuach", "age": "10", "city": "Ramla"} ]

@route('/')
def get_app():
    return static_file("people.html", root="static")
@route('/people')
def get_people():
    person = [random.choice(people)]
    return json.dumps(person)
    
if __name__ == "__main__":
    run(host='localhost',port=7000, debug=True,reloader=True)    