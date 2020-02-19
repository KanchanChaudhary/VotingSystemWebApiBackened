const mongoose = require('mongoose');

const votingSchema = new mongoose.Schema({
    partyname: {
        type: String
    },
    candiatename: {
        type: String
    },
    image: {
        type: String
    },
    candiateid: {
        type: String
    },
    userid: {
        type: String
    },
    username: {
        type: String
    },
    useremail: {
        type: String
    },
})

const voting = mongoose.model('voting', votingSchema);
module.exports = voting;