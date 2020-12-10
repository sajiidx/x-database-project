const mongoose = require('mongoose')

const visitorSchema = mongoose.Schema({
    vid: {
        type: String,
        required: true,
        unique: true
    }
})

const Visitor = mongoose.model('Visitor', visitorSchema)
module.exports = Visitor