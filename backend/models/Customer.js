const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    cid: {
        type: String,
        required: true,
        unique: true,
        default: Date.now()
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer