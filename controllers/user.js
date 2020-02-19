var userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const config= require('../config')


module.exports = {
    async RegisterUser(req, res) {

        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let password = req.body.password;

        userModel.findOne({
            email: email
        }).then(function (result) {
            if (result == null) {
                var addUser = new userModel({
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                    usertype:'normal'
                });

                addUser.save().then(function () {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        registered: true,
                        message: 'New user registered'
                    }, null, 3));
                }).catch(function () {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        registered: false,
                        message: 'Something went wrong please try again'
                    }, null, 3));
                })
            }
            else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    registered: false,
                    message: 'User already exist'
                }, null, 3));
            }
        })
    },

    async LoginUser(req, res) {

        let email = req.body.email;
        let password = req.body.password;

        userModel.findOne({
            email: email,
            password:password
        }).then(function (userdata) {
            if (userdata) {
                const token = jwt.sign({
                    email: userdata.email,
                    id: userdata._id
                }, config.secret);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    loggedin: true,
                    message: 'User logged in',
                    token: token,
                    userdata:userdata
                }, null, 3));
            }
            else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    loggedin: false,
                    message: 'Invalid username and password'
                }, null, 3));
            }
        }).catch(function (err) {
            console.log(err)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                loggedin: false,
                message: 'Something went wrong please'
            }, null, 3));
        })
    }
}