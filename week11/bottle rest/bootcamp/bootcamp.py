from bottle import run, route, get, post, delete, put, request
import pymysql
import json



connection = pymysql.connect(user='root', password='liora', db='bootcamp',
                             charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)


@get('/students')
def get_all():
    try:
         with connection.cursor() as cursor:
        query = 'select * from students'
        cursor.execute(query)
        return json.dumps(cursor.fetchall())
    except pymysql.connector.Error as error:print("Failed get students from database: {}".format(error))    

       


@post('/students')
def add_student():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    been_dismissed = request.json.get("been_dismissed")
    kohort = request.json.get("kohort")
    try:
        with connection.cursor() as cursor:
            query = "insert into students values %s, %s,%s,%s,%s"
            cursor.execute(query, (first_name, last_name, been_dismissed, kohort))
            connection.commit()
    except pymysql.connector.Error as error:print("Failed to add student into database: {}".format(error))    


@get('/students/id/<student_id>')
def get_student(student_id):
    try:    
        with connection.cursor() as cursor:
                query = "select * from students where studentId={}".format(student_id)
                cursor.execute(query)
                return json.dumps(cursor.fetchone())
    except pymysql.connector.Error as error:print("Failed to get student from database: {}".format(error))            
@get('/students/first_name<firstName>')
def get_student_by_name(first_name):
    try:    
        with connection.cursor() as cursor:
                query = f"select * from students where firstName='{first_name}'"
                cursor.execute(query)
                return json.dumps(cursor.fetchall())        
    except pymysql.connector.Error as error:print("Failed to get student from database: {}".format(error))    
@delete('students/<id>')
def remove(id):
    try:
        with connection.cursor() as cursor:
            query = """Delete from students where id = %s"""
            cursor.execute(query,(id))
            print("\n Record Deleted successfully ")
    except pymysql.connector.Error as error:print("Failed to Delete record to database: {}".format(error))
   
   
@put('students/')
def update():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    been_dismissed = request.json.get("been_dismissed")
    kohort = request.json.get("kohort")
    try:
        with connection.cursor() as cursor:
        query = "select * from students where studentId={}".format(studentId)
        cursor.execute(query)
        old_name= json.dumps(cursor.fetchone())
        query = "UPDATE students SET firstName= %s,lastName=%s,been_dismissed=%s,kohort=%s WHERE studentId = %s"
        cursor.execute(query,(first_name, last_name, been_dismissed, kohort,id))
        connection.commit()
    except pymysql.connector.Error as error:print("Failed to update student  to database: {}".format(error))

    


if __name__ == "__main__":
    run(host='localhost', port='7000', debug='True', reloader='True')
