const mongoose = require('mongoose')

const wishlistSchema = mongoose.Schema({
    wishlist_id: {
        type: String,
        required: true,
        unique: true
    },
    items: {
        type: [String],
    }
})

const Wishlist = mongoose.model('Wishlist', wishlistSchema)
module.exports = Wishlist