from bottle import route , run, jinja2_view
from jinja2 import Template


counter= {'count':0}
@route('/')
def index():
    template = Template ('<h2>Hello, You entered: {{times}} times</h2>')
    counter['count'] +=1
    return template.render(times = counter['count'])
   

if __name__ == "__main__":
    run(host='localhost', port=7005,debug=True,reloader=True )   

    