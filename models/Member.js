const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const memberSchema = new mongoose.Schema({
    fisrtName:{
        type: String,
        reqiured: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Member', memberSchema)