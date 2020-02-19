const contactModel = require('../model/contact')

module.exports = {

    async Addcontact(req, res) {

        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let message = req.body.message;

        var addMesssage = new contactModel({
            name: name,
            email: email,
            phone: phone,
            message: message,

        })

        addMesssage.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                registered: true,
                message: 'Thank you for contacting we will get you soon ' + name
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                registered: false,
                message: 'Something went wrong please try again'
            }, null, 3));
        })

    },

    async getAllContact(req, res) {
        contactModel.find().then(function (contactData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'contact data selected ',
                data: contactData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Something went wrong please try again'
            }, null, 3));
        })
    }

}