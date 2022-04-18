const BookModel= require("../models/newBook")
const AuthorModel = require("../models/newAuthor")
const PublisherModel = require("../models/newPublisher")

// question 1 , 2
const Publisher = async function (req, res) {
    const data = req.body
    let  savedData = await PublisherModel.create(data)  
    res.send( {msg: savedData})
}
const Author = async function (req, res) {
    const data = req.body
    let  savedData = await AuthorModel.create(data)  
    res.send( {msg: savedData})
} 
const Books = async function (req, res) {
    const data = req.body
    let  savedData = await BookModel.create(data) 
    
        res.send( {msg: savedData})
    
}


// problem 3 (a)

const createBooks = async function (req, res) {
    const data = req.body
    if(data.author){
        let  savedData = await BookModel.create(data) 
    
      res.send( {msg:savedData})
    }
    else{
        res.send( {msg: "author id is require"})
    }
}
 // problem 3 part (b)
 const authorValidation = async function (req, res) {
    const data = req.body
    
        let  savedData = await AuthorModel.find({author: "_id"}) 
        if(data.author=savedData){
    
      res.send( {msg:"valid author id"})
    }
    else{
        res.send( {msg: "author id is require"})
    }
}




// problem 3 part (c)
const Bookswithpublisher = async function (req, res) {
    const data = req.body
    if(data.publisher){
    let  savedData = await BookModel.create(data) 
      res.send( {msg: savedData})
    }
    else{
        res.send( {msg: "publisher is not present"})
    }
}

// problem 3 part (d)
const publisherValidation = async function (req, res) {
    const data = req.body
    
        let  savedData = await PublisherModel.find({publisher: "_id"}) 
        if(data.publisher = savedData){
    
      res.send( {msg:"valid publisher id"})
    }
    else{
        res.send( {msg: "publisher id is require"})
    }
}
//problem 4 for author details  with book
const  getBookswithauthor = async function (req, res) {
    let  allbooks = await BookModel.find().populate('author');
     res.send( {msg: allbooks})
    }
// problem 4 for  publisher detail with book
    const  getbookwithpublisher = async function (req, res) {
        let  allbooks = await BookModel.find().populate('publisher');
         res.send( {msg: allbooks})
        }
        
      
        


module.exports.Publisher = Publisher
module.exports.Author =  Author
module.exports.Books= Books
module.exports.getBookswithauthor = getBookswithauthor
module.exports.getbookwithpublisher = getbookwithpublisher
module.exports.createBooks = createBooks 
module.exports.Bookswithpublisher = Bookswithpublisher
 module.exports.authorValidation = authorValidation
 module.exports.publisherValidation = publisherValidation


