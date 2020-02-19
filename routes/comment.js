const app = module.exports = require('express')();
let commentController = require('../controllers/comment')

app.post('/', commentController.AddComment);
app.get('/:feedbackid', commentController.getComments);