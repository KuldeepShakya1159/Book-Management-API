const jwt = require('jsonwebtoken');

const jwtAuth = (req,res,next)=>{
    const token = req.cookies._session;
    console.log(token,"====================inside auth")
    try{
        const user = jwt.verify(token,process.env.SECRET_KEY);
        console.log(user)
        next();
    }catch(err){
        res.clearCookie("_session");
        return res.status(401).json({result:"unAuthorized_user"})
    }
    
}

module.exports = jwtAuth;