const mongoose = require('mongoose');

const Like = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});

module.exports = mongoose.model('Like', Like);