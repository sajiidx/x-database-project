const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    subcategory_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    }
})

const Subcategory = mongoose.model('Subcategory', categorySchema)
module.exports = Subcategory