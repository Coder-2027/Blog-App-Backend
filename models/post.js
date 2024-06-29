const mongoose = require('mongoose');
const {Like} = require('./like');
const {Comment} = require('./comment');

const post = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    likes : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",
    },
    comments : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    }
});

module.exports = mongoose.model('post', post);