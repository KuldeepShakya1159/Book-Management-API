const userService = require('../service/userService');
const generateToken = require('../utils/generatetoken');

const signIn = async (req,res)=>{
    let user = await userService.findUser(req.body.email);
    const token = generateToken(req.body);
    console.log(token)
    res.cookie('_session',token,{
        expires:new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
    })
    console.log("user from controller ", user);
    if(!user){
         user = await userService.registerUser(req.body);
         console.log("inside if ", user)
        return res.status(201).json({result:user});
    }else{
        console.log("inside else",user)
        return res.status(201).json({result:user})
    }
}

module.exports = {signIn};