const mongoose = require('mongoose')
const Catergory = require('./Category')


// This is the model
const reviewsSchema = mongoose.Schema({
    body: {
        type : String,
        required : true
    },
    date: {
        type : String,
        default : Date.now
    },
    reviewer: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
})

const cakeSchema =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    reviews: [reviewsSchema],
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }
}, { timestamps : true })

module.exports = mongoose.model('Cake', cakeSchema)