import pymysql
import json
my_actors=[
    {'id': 85008898, 'full_name': 'Butch Wilhelm', 'gender': 'M'},
{'id': 85009098, 'full_name': 'Celia Fushille-Burke', 'gender': 'M'},
{'id': '1', 'full_name': 'Richard Gear', 'gender': 'M'},
{'id': '2', 'full_name': 'Simon Pegg', 'gender': 'F'},
{'id': '3', 'full_name': 'lev levivo', 'gender': 'M'}
]
connection = pymysql.connect(host='localhost',user='root',
password='liora', db='imdb',charset='utf8mb4',
cursorclass=pymysql.cursors.DictCursor)
try:
    with connection.cursor()as cursor:
        sql="select full_name from actors"
        cursor.execute(sql)
        result=cursor.fetchall()
        for actor in my_actors:
            if  actor not in result:
                t=actor['id'],actor['full_name'],actor['gender']
                sql= "insert into actors values(%s,%s,%s)"  
                cursor.execute(sql,t)
            else:
                print("already exist")    
        connection.commit() 
except: Exception
                   
              
finally:
    connection.close()    