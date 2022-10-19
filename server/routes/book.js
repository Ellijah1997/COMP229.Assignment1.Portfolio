let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our bookModel
let Book = require('../model/books');
//GET Route for the book list page - READ OPERATION
router.get('/',(req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err)
        {
           return console.error(err);
        }
        else
        {
            //console.log(BookList);
            res.render('book',{title:'Books',BookList: bookList})
        }
    });
});

/*
 * *
 * GET route for displaying the ADD page - CREATE operation
 * POSTroute for processing the ADD page - CREATE operation
 * GET route for displaying the EDIT page - UPDATE operation
 * POST route for processing the EDIT page - UPDATE operation
 * GET to perform deletion - DELETE operation
 * */

module.exports = router;