from bottle  import run,get,post,delete,request

class AnimalsApi:
    # insert the class that connect me to db:
    def __init__(self,db_adapter):
        self.db_adapter = db_adapter
        self.run()
    def run(self):    
       run(host='localhost',port='8000',debug=True, reloader=True)
    @get("/animals")
    def get_all_animals(self):
        # (check what to add)not finished
        # animals_list = self.db_adapter()
        pass

    @get("/animals/<animal_id>")
    def get_animal(self,animal_id):
        pass

    @post("/animals")
    def create_animal(self):
        pass

    @put("/animals")
    def update_animal(self):
        pass

    @delete("/animals")
    def delete_animals(self):
        pass    





    