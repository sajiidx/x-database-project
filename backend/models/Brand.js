const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
    bid: {
        type: String,
        required: true,
        unique: true
    },
    bname: {
        type: String,
        required: true
    }
})

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand