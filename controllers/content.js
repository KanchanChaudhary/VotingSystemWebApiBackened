const contentModel = require('../model/content');

module.exports = {
    async addContent(req, res) {
        let contenttype = req.body.contenttype;
        let title = req.body.title;
        let description = req.body.description;

        let addContent = new contentModel({
            contenttype: contenttype,
            title: title,
            description: description
        })

        addContent.save().then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: true,
                message: contenttype + ' added',
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                added: false,
                message: 'Failed to add ' + contenttype,
            }, null, 3));
        })

    },

    async getAllContent(req, res) {
        contentModel.find().then(function (contentData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'Content selected',
                data: contentData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Failed to select',
            }, null, 3));
        })
    },

    async getSingleContent(req, res) {
        let contenttype = req.params.contenttype;


        contentModel.find({
            contenttype: contenttype
        }).then(function (contentData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'Content selected',
                data: contentData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Failed to select',
            }, null, 3));
        })
    },

    async DeleteContent(req, res) {

        let contentid = req.body.id;

        contentModel.findByIdAndDelete(contentid).then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: true,
                message: 'Content deleted',
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