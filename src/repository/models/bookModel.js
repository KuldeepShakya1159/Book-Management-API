const mongoose = require("mongoose");
const booksModel = mongoose.Schema({
    name:{
        type:String
    },
    author:{
        type:String
    },
    publish_year:{
        type:String
    }
})

module.exports = mongoose.model('books',booksModel)