const app= module.exports= require('express')();
const userController= require('../controllers/user')

app.post('/signup', userController.RegisterUser);
app.post('/login', userController.LoginUser);