const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

    productHeading: {
        type: String,
        required:true
    },

    quantity: {
        type: Number,
        required:true
    },
    // productPrice: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product'
    // }
})

module.exports = mongoose.model('Cart', cartSchema)