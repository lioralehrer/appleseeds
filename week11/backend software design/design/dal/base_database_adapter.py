# this is my intarfase for using database (abstract class)
from abc import ABC, abstractmethod

class  BaseDatabaseAdapter:
    # create
    # we have to give him @abstractmethod for every fnc'
    @abstractmethod
    def add_animal(self,animal):
        pass
    # read
    @abstractmethod    
    def get_animal(self,animal_id):
        pass
    @abstractmethod    
    def get_animals(self):
        pass
     # update
    @abstractmethod        
    def update_animal(self,animal_id, animal_to_apdate):
        pass     
    # delete
    @abstractmethod       
    def delete_animal(self,animal_id):
        pass
 