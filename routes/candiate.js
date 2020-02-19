const app = module.exports = require('express')();
let multer = require('multer');
let path = require('path')
let candiateModel = require('../model/candiate')
let candiateController = require('../controllers/candiate')

var ImagefileName = '';
var storage = multer.diskStorage({
    destination: 'asset/uploads/images/candiate',
    filename: function (req, file, callback) {
        const extension = path.extname(file.originalname);
        ImagefileName = file.fieldname + Date.now() + extension;
        callback(null, ImagefileName);

    }
});


var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: {
        fileSize: 10000000
    }
});

app.post('/', upload.single('image'), function (req, res) {

    console.log(req.body)

    let partyname = req.body.partyname;
    let candiatenname = req.body.candiatename;
    let image = ImagefileName;

    AddDrink = new candiateModel({
        candiatenname: candiatenname,
        partyname: partyname,
        image: image
    })

    AddDrink.save().then(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: true,
            message: 'New candiate added'
        }, null, 3));
    }).catch(function () {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            added: false,
            message: 'Something went wrong please try again'
        }, null, 3));
    })
})


app.get('/', candiateController.getAllCandiate)
app.delete('/', candiateController.DeleteCandiate)