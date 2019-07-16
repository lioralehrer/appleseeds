from bottle import run ,route
import json
import feedparser

list=[]
feed = feedparser.parse("https://www.jpost.com/Rss/RssFeedsHeadlines.aspx")
for item in feed.entries:
    list.append({"title": item.title,"link":item.link})
print(list) 

@route('/')
def start_app():
    return json.dumps(list)
if __name__ == "__main__":
    run(host="localhost", port="7003" ,debug=True,reloader=True)    