const userService = require('../service/userService');
const generateToken = require('../utils/generatetoken');

const signIn = async (req,res)=>{
    let user = await userService.findUser(req.body.email);
    const token = generateToken(req.body);
  
    res.cookie('_session',token,{
        expires:new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
    })
    
    if(!user){
         user = await userService.registerUser(req.body);
  
        return res.status(201).json({result:user});
    }else{
     
        return res.status(201).json({result:user})
    }
}

module.exports = {signIn};
