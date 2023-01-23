const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Category name is required']
        
    },
    cakes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cake'
    }]
})

module.exports = mongoose.model('Category', categorySchema)