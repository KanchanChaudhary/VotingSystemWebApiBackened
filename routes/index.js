const app = module.exports = require('express')();

app.get('/', function (req, res) {
    res.send('Server is running on port ' + 8080)
})

app.use('/users', require('./user'))
app.use('/content', require('./content'))
app.use('/candiate', require('./candiate'))
app.use('/vote', require('./voting'));
app.use('/contact', require('./contact'));
app.use('/comment', require('./comment'));