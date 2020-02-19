const voteModel = require('../model/voting');

module.exports = {
    async addvote(req, res) {
        let partyname = req.body.partyname;
        let candiatename = req.body.candiatename
        let candiateid = req.body.candiateid
        let userid = req.body.userid;
        let username = req.body.username;
        let useremail = req.body.useremail;
        let image = req.body.image;

        let addvote = new voteModel({
            partyname: partyname,
            candiatename: candiatename,
            image: image,
            candiateid: candiateid,
            userid: userid,
            username: username,
            useremail: useremail
        })

        addvote.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'You voted ' + candiatename,
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: false,
                message: 'Failed to cast vote',
            }, null, 3));
        })

    },

    async getAllvote(req, res) {
        voteModel.find().then(function (voteData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'vote selected',
                data: voteData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Failed to select',
            }, null, 3));
        })
    },

    async getSinglevote(req, res) {
        let votetype = req.params.votetype;

        voteModel.find({
            votetype: votetype
        }).then(function (voteData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'vote selected',
                data: voteData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Failed to select',
            }, null, 3));
        })
    },

    async Deletevote(req, res) {

        let voteid = req.body.id;

        voteModel.findByIdAndDelete(voteid).then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: true,
                message: 'vote deleted',
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: false,
                message: 'Failed to delete',
            }, null, 3));
        })
    }
}