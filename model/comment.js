const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    feedbackid: {
        type: String
    },
    username: {
        type: String
    },
    userid: {
        type: String
    },
    comment: {
        type: String
    }
})

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;