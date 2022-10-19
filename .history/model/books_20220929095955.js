let mongoose = require('mongoose');
let bookModel = mongoose.Schema({
    name: string,
    author: string,
    published: string,
    price: number
},
{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);