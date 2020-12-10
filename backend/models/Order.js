const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    order_date: {
        type: Date,
        default: Date.Now
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order