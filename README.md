###Book Management API - 

title: "welcome to Book-Management API by kuldeep",  
       API:{  
        "/api/user/login":"this api will register/login the user and generate the jwt for authentication/authorization",  
        "/api/books/":"It will return all the books that are stored",  
        "/api/books/:id":"will return particular book with matching id",  
        "/api/books/add":"this api accepts book data and is jwt proteced . Only authorized users can access this route",  
        "/api/books/delete/:id":"this will delete the book matching with ID from db (Protected Route)",  
        "/api/books/update/:id":"this will update the book with id (Protected route)",  
        "api/books/filter/:key":"this route will filter the books based on publish year or author ."  
       }
