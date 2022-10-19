let mongoose = require('mongoose');
let bookModel = mongoose.schema({
    name: string,
    author: string,
    published: string,
    price: number
},
{
    collection:"books"
});

module.exports = mongoose.model('book',bookModel);