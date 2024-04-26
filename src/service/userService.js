const userModel = require('../repository/models/userModel');

const registerUser = async(user)=>{
    let dbUser = new userModel(user);
    dbUser = await dbUser.save();

    return dbUser;
}

const findUser = async(email)=>{
    const user = await userModel.findOne({email:email});
    if(!user){
        return user;
    }
    return null;
}

module.exports = {
    registerUser,
    findUser
}