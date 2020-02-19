const app = module.exports = require('express')();
const contentController = require('../controllers/content')

app.post('/', contentController.addContent);
app.get('/:contenttype', contentController.getSingleContent);
app.get('/', contentController.getAllContent);
app.delete('/', contentController.DeleteContent);