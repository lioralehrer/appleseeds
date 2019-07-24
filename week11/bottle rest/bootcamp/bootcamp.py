from bottle import run, route, get, post, delete, put, request
import pymysql
import json



connection = pymysql.connect(user='root', password='liora', db='bootcamp',
                             charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)


@get('/students')
def get_all():
    with connection.cursor() as cursor:
        query = 'select * from students'
        cursor.execute(query)
        return json.dumps(cursor.fetchall())


@post('/students')
def add_student():
    firstName = request.json.get("firstName")
    lastName = request.json.get("lastName")
    been_dismissed = request.json.get("been_dismissed")
    kohort = request.json.get("kohort")
    try:
        with connection.cursor() as cursor:
            query = "insert into students values %s, %s,%s,%s,%s"
            cursor.execute(query, (firstName, lastName, been_dismissed, kohort))
            connection.commit()
    except: Exception    


@get('/students/<studentId>')
def get_student(studentId):
    with connection.cursor() as cursor:
        query = "select * from students where studentId={}".format(studentId)
        cursor.execute(query)
        return json.dumps(cursor.fetchone())
@get('/students/<firstName>')
def get_student_by_name(firstName):
    with connection.cursor() as cursor:
        query = f"select * from students where firstName='{firstName}'"
        cursor.execute(query)
        return json.dumps(cursor.fetchall())        
        
@delete('students/<id>')
def remove(id):
    try:
        with connection.cursor() as cursor:
            query = """Delete from students where id = %s"""
            cursor.execute(query,(id))
            print("\n Record Deleted successfully ")
    except mysql.connector.Error as error:print("Failed to Delete record to database: {}".format(error))
   
   
@put('students/<id>/<new_data>')
def update(id,new_data):
    firstName = request.json.get("firstName")
    lastName = request.json.get("lastName")
    been_dismissed = request.json.get("been_dismissed")
    kohort = request.json.get("kohort")
    try:
        with connection.cursor() as cursor:
        query = "select * from students where studentId={}".format(studentId)
        cursor.execute(query)
        old_name= json.dumps(cursor.fetchone())
        query = f"UPDATE students SET firstName={firstName},lastName={lastName},been_dismissed={been_dismissed},kohort={kohort} WHERE studentId ={id}"
        cursor.execute(query, (firstName, lastName, been_dismissed, kohort))
        connection.commit()
    except: Exception

    


if __name__ == "__main__":
    run(host='localhost', port='7000', debug='True', reloader='True')
