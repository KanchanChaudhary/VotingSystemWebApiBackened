const app = module.exports = require('express')();
let votingController= require('../controllers/vote')

app.post('/', votingController.addvote);
app.get('/', votingController.getAllvote);