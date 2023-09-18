const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imageUrl:{
        type: String,
        reqiured: true
    }
})

module.exports = mongoose.model('Image', imageSchema)