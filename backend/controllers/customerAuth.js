const Customer = require('../models/Customer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const register = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
        if(err){
            return res.status(401).send(`Error: ${err}`)
        }
        //var username = req.body.username
        //var email = req.body.email

        //let isCustomer = Customer.findOne({$or: [{email:username},{username:username}]})
        //if(isCustomer){
            //return res.status(401).json({msg: "User already exits"})
        //}

        let customer = new Customer({
            cid: req.body.cid,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
            phone:  req.body.phone
        })
        
        customer.save();

        const payload={
            user:{
                id: customer.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            (err, token) =>{
                if(err){
                    return res.status(500).send(error)
                }
                res.json({token});
            }
        )
    })
}

const login = (req, res) => {
    var username = req.body.username
    var password = req.body.password

    Customer.findOne({$or: [{email:username},{username:username}]})
    .then(customer =>{
        if(customer){
            bcrypt.compare(password, customer.password, function(err, result) {
                if(err){
                    return res.status(401).send(err)
                }
                if(result){
                    const payload={
                        user:{
                            id: customer.id
                        }
                    }

                    jwt.sign(
                        payload,
                        config.get("jwtSecret"),
                        (err, token) =>{
                            if(err){
                                return res.status(500).send(err)
                            }
                            res.json({token});
                        }
                    )       
                }
                else{
                    return res.status(401).send('Password Incorrect');
                }
            })
        }
        else{
            return res.status(401).send('No Such Customer Found')
        }
    })
}
module.exports = {
    register, login
}