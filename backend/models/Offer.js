const mongoose = require('mongoose');

const {
    Schema
} = mongoose.Schema;

const OfferSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }


});


module.exports = mongoose.model("Offer", OfferSchema);