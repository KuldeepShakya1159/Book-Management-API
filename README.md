### Book Management API -  

### How to setup   
 ## Step1 clone the repository into your local system ----    
 ## Step2 run the command ' npm init ' to install all the dependicies  
 ## step3 create .env file and initialize these variable     
 ## PORT , DB_URL , SECRET_KEY   
 ## DB URL will contain your DB connnection string and make sure to add two collections named "books" & "users" to get it work properly  
 ## SECRET_KEY can be anything for serializing the jwt .  


 ## Authentication -   
  For user Authentication , JWT is used with storing the tokens in cookies so while testing on postman , ensure to check the cookies .  

### API  
     ## API:{  
        "/api/user/login":"this api will register/login the user and generate the jwt for authentication/authorization",  
        "/api/books/":"It will return all the books that are stored",  
        "/api/books/:id":"will return particular book with matching id",  
        "/api/books/add":"this api accepts book data and is jwt proteced . Only authorized users can access this route",  
        "/api/books/delete/:id":"this will delete the book matching with ID from db (Protected Route)",  
        "/api/books/update/:id":"this will update the book with id (Protected route)",  
        "api/books/filter/:key":"this route will filter the books based on publish year or author ."  
       }
