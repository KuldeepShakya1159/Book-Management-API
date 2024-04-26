require('dotenv').config();
require("./src/repository/config/db")
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');


const app = express();

// import router

const userRouter = require('./src/router/userRouter');
const booksRouter = require('./src/router/booksRouter');
const HomeRouter = require('./src/router/homeRouter')


// middlewares
app.use(cookieparser());
app.use(express.json());


// api
app.use('/',HomeRouter)
app.use('/api/user',userRouter);
app.use('/api/books',booksRouter);






app.listen(process.env.PORT || 5000,(err)=>{
    if(err){
        console.log(`failed to run server at ${process.env.PORT}`)
    }else{
        console.log(`server is running at ${process.env.PORT}`)
    }
})