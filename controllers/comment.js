const commentModel = require('../model/comment')

module.exports = {

    async AddComment(req, res) {
        let feedbackid = req.body.feedbackid;
        let username = req.body.username;
        let userid = req.body.userid;
        let comment = req.body.comment

        let addComment = new commentModel({
            feedbackid: feedbackid,
            username: username,
            userid: userid,
            comment: comment

        })

        addComment.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: 'New comment added'
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: false,
                message: 'Failed to add comment'
            }, null, 3));
        })
    },

    async getComments(req, res) {
        let feedbackid = req.params.feedbackid;

        commentModel.find({
            feedbackid: feedbackid
        }).then(function (commentData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'data selected',
                data: commentData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'data selection failed',
            }, null, 3));
        })
    }
}