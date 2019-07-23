import pymysql
connection = pymysql.connect(host='localhost',user='root',
password='liora', db='imdb',charset='utf8mb4',
cursorclass=pymysql.cursors.DictCursor)
my_actors=[{'id':12, 'full_name':'Borito boritini','gender':'M','num_of_movies':3},
{'id':22, 'full_name':'Levana Leon','gender':'F','num_of_movies':10},
{'id':32, 'full_name':'Sofia safuni','gender':'F','num_of_movies':4}]
try:
    with connection.cursor()as cursor:
        query = "ALTER TABLE actors ADD  num_of_movies int"
        cursor.execute(query)
        for actor in my_actors:
            sql="insert into actors values (%s,%s,%s,%s)"
            t=actor['id'],actor['full_name'],actor['gender'],actor['mum_of_movies']
            cursor.execute(sql,t)
        connection.commit()
except: Exception: print("couldn't insert details")
       
finally:
    connection.close()               