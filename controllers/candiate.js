const candiateModel = require('../model/candiate');

module.exports = {

    async DeleteCandiate(req, res) {
        let candiateid = req.body.id;

        candiateModel.findByIdAndDelete(candiateid).then(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: true,
                message: 'candiate deleted',
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                deleted: false,
                message: 'Failed to delete',
            }, null, 3));
        })
    },

    async getAllCandiate(req, res) {
        candiateModel.find().then(function (candiateData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: true,
                message: 'Content selected',
                data: candiateData
            }, null, 3));
        }).catch(function () {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                selected: false,
                message: 'Failed to select',
            }, null, 3));
        })
    }

    
}
