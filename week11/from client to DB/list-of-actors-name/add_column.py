import pymysql
connection = pymysql.connect(host='localhost',user='root',
password='liora', db='imdb',charset='utf8mb4',
cursorclass=pymysql.cursors.DictCursor)
try:
    with connection.cursor()as cursor:
    query = "ALTER TABLE actors ADD num_of_movies int" 
    cursor.execute(query)
