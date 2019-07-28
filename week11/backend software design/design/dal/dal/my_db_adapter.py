from .base_database_adapter import BaseDatabaseAdapter
import pymysql
# from here i will ask my sql queris:
class MyDbAdapter(BaseDatabaseAdapter):
    # connect here to db:
    def __init__(self):
        self._connection = pymysql.connect(host='localhost', user='root',
        password='liora',db='animals')
    
    def add_animal(self, animal):
        try:    
            with self._connection.cursor()as cursor:
                sql=f"insert into animals values('{animal.name}','{animal.type},{animal.age}')"
                cursor.execute(sql)
                cursor.commit()
        except Exception as e :print (e)        