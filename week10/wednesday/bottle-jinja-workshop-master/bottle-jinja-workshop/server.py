from bottle import static_file, run, jinja2_view, get
from jinja2 import Template
from functools import partial

view = partial(jinja2_view, template_lookup=['templates'])

# Static routes:
@get("/js/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root="./static/js")


@get("/css/<filepath:re:.*\.css>")
def css(filepath):
    return static_file(filepath, root="./static/css")


@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./static/images")

# Dynamic routes:
@get("/")
@view("index.html")
def index():
    return {"name": "Shmulik","tricks":["Jumping","Playing dead", "playing the piano"]}


if __name__ == "__main__":
    run(host="localhost", port=7000, debug=True, reloader=True)
