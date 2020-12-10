const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

const AuthController = require('../controllers/customerAuth')
const auth = require('../middleware/auth')

router.get(
    '/',
    auth,
    async (req, res) =>{
        try{
            //console.log(auth);
            const user =  await Customer.findById(req.user.id).select("-password");
            res.json(user);
        } catch(errror){
            console.log(errror.message);
            return res.status(500).json({msg: "Server Error..."})
        }
    }
)

router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

module.exports = router