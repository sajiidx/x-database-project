const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next){
    try{
        const token = req.header('x-auth-token');
        console.log(token)
        const verifiedUser = jwt.verify(
            token,
            config.get("jwtSecret")
        )
        req.user = verifiedUser.user;
        next();
    }catch(error){
        console.log(error.message);
        return res.status(500).json({msg: error.message})
    }
}