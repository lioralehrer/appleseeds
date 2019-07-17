from bottle import static_file, run, jinja2_view, get, post, route, request
from jinja2 import Template
from functools import partial

new_user = {}
view = partial(jinja2_view, template_lookup=['templates'])


# Dynamic routes:
@get("/")
@view("index.html")
def index():
    return static_file("index.html", root="")


@route('/new_user', method="POST")
@view('hello.html')
def new_user():
    # new_user.clear()
    new_user = {
        "first_name": request.forms.get("first_name"),
        "last_name": request.forms.get("last_name"),
    }
    greeting = Template(
        "<h1>Welcome {{first_name}}</h1><h2>We are very happy to greet you {{first_name}}{{last_name}}</h2>")
    return greeting.render(first_name=new_user["first_name"], last_name=new_user["last_name"])


if __name__ == "__main__":
    run(host="localhost", port=7004, debug=True, reloader=True)
