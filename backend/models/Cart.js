const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    cart_id: {
        type: String,
        required: true,
        unique: true
    },
    items: {
        type: [String],
    },
    cost: {
        type: Number,
        required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)
module.exports = Cart