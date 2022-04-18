const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const NewbookSchema =new mongoose.Schema ({
   
    author: {
        type: ObjectId,
        ref: 'AuthorSchema'
        
    },
    ratings: Number,
    price: Number,
    
    publisher: {
        type: ObjectId,
        ref: 'PublisherSchema'
    },
},
)

 module.exports = mongoose.model('NewbookSchema', NewbookSchema) // newbook