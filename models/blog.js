const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type: String,
        rquired: true
    },
    body:{
        type: String,
        requied: true
    }
}, {timestamp: true});

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog; 