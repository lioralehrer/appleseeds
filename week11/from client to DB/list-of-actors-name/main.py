import pymysql

my_actors=["Richard Gear","Simon Pegg","Butch Wilhelm","Celia Fushille-Burke"]
connection = pymysql.connect(host='localhost',
user='root', password="liora",db='imdb',charset='utf8mb4',cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor()as cursor:
        sql=f"select full_name from actors "
        cursor.execute(sql)
        result= cursor.fetchall()
        for row in result:
            if row['full_name'] in my_actors:
               print(row['full_name'])
            
        
        
finally:
    connection.close()
