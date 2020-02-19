const mongoose = require('mongoose');

const candiateSchema = new mongoose.Schema({
    partyname: {
        type: String
    },
    candiatenname: {
        type: String
    },
    image: {
        type: String
    }
})

const candiate = mongoose.model('candiate', candiateSchema);
module.exports = candiate;