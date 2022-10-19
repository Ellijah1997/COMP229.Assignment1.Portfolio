let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our bookModel
let Book = require('../model/books');
//GET Route for the book list page - READ OPERATION
router.get('/',(req,res,next)=>{
    Book.find((err,BookList)=>{
        if(err)
        {
           return console.error(err);
        }
        else
        {
            console.log(BookList);
        }
    });
});

module.exports = router;