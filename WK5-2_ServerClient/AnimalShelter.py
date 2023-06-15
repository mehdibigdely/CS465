# Example Python Code to Insert a Document
from pymongo import MongoClient
from bson.objectid import ObjectId

class AnimalShelter(object):
    """ CRUD operations for Animal collection in MongoDB """

    def __init__(self):
        # Initializing the MongoClient. This helps to 
        # access the MongoDB databases and collections.
        # This is hard-wired to use the aac database, the 
        # animals collection, and the aac user.
        # Definitions of the connection string variables are
        # unique to the individual Apporto environment.
        #
        # You must edit the connection variables below to reflect
        # your own instance of MongoDB!
        #
        # Connection Variables
        #
        USER = 'aacuser'
        PASS = 'snhu4321'
        HOST = 'nv-desktop-services.apporto.com'
        PORT = 30366
        DB = 'AAC'
        COL = 'animals'
        #
        # Initialize Connection
        #
        self.client = MongoClient('mongodb://%s:%s@%s:%d' % (USER,PASS,HOST,PORT))
        self.database = self.client['%s' % (DB)]
        self.collection = self.database['%s' % (COL)]

# Complete this create method to implement the C in CRUD.
    def create(self, data):
        if data is not None:
            self.database.animals.insert_one(data)  # data should be dictionary 
            #print ("Successfully inserted ") 
            #print (data)
            return True
        else:
            #print ("Data non")
            raise Exception("Nothing to save, because data parameter is empty")
            return False
        
# Create method to implement the R in CRUD.
    def read(self, data=None):
     # if data value is not None or empty, it is passed to find method and will return all rows which matches the data criteria
         if data is not None:
             data = self.database.animals.find(data,{"_id":False})
             return data
         else:
     #if there is no search criteria then all the rows will be return  
             raise Exception("Nothing to read, because data parameter is empty")
 