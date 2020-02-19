const app = module.exports = require('express')();
const contactController = require('../controllers/contact')

app.post('/', contactController.Addcontact);
app.get('/', contactController.getAllContact);