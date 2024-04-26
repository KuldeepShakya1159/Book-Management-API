const mongoose = require("mongoose");

const userModel = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    // books:[
    //     { type : Schema.Types.ObjectId , ref:'books' , required:true}
    // ]
})

module.exports = mongoose.model('users',userModel);