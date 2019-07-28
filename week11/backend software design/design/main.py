# from dal.base_database_adapter import BaseDatabaseAdapter
from dal.my_db_adapter import MyDbAdapter
from routing.animals_api import AnimalsApi
if __name__ == "__main__":
    # giving to animalsApi the class dealing with database:myDbAdapter: (dependency injection)
   api=AnimalsApi(MyDbAdapter())
    # this wont work: we cant call abstart class
    # adapter = BaseDatabaseAdapter()
    # print(adapter)
    # adapter.add(animal)
    api.run()