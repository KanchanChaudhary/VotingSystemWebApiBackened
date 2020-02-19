const mongoose= require('mongoose');
const userModel=require('./model/user')
const candiateModel = require('./model/candiate');
const contentModel = require('./model/content');

beforeAll(async ()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/votingsystem', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    
})

afterAll(async () => {
    await mongoose.connection.close();
})

describe('User Schema test', () => {
   
    it('Add user test', () => {
        let name = "karan";
        let email = "karan@gmail.com";
        let phone = "437638768";
        let password = "abcd";

        var addUser = new userModel({
            name: name,
            email: email,
            phone: phone,
            password: password,
            usertype:'normal'
        });

        addUser.save().then(function (result) {
            expect(result.name).toEqual('bibash');
            expect(result.email).toEqual('bibash');
            expect(result.phone).toEqual('437638768');
            expect(result.password).toEqual('abcd');
                    
        }).catch(function () {
            console.log('error')
        })

    });

  it('Login user test', ()=>{
    let email = "karan@gmail.com";
    let password = "abcd";

    userModel.findOne({
        email: email,
        password:password
    }).then(function (userdata) {
        if (userdata) {
            expect(userdata.email).toEqual('karan@gmail.com')
            expect(userdata.password).toEqual('abcd')
        }
        else {
           console.log('Wrong creditianls')
        }
    }).catch(function (err) {
        console.log(err)
    })
  })
    
})

describe('Candiate Schema test ',()=>{

    it('Add candiate', ()=>{
        
    let partyname = "congress";
    let candiatenname = "shyam";
    let image = 'image77864382529.png';

    AddCandidate = new candiateModel({
        candiatenname: candiatenname,
        partyname: partyname,
        image: image
    })

    AddCandidate.save().then(function (result) {
        expect(result.candiatenname).toEqual('shyam');
        expect(result.image).toEqual('image77864382529.png');
        expect(result.partyname).toEqual('congress');
       
    }).catch(function () {
        console.log('Error')
    })
    })
})

describe('Content schema test ', ()=>{
   
    it('Select content type ', ()=>{
        let contenttype = "news";

        contentModel.find({
            contenttype: contenttype
        }).then(function (contentData) {
           expect(contentData.contenttype).toEqual('news')
        }).catch(function () {
           console.log('error')
        })
    })

    it('Delete content ', ()=>{
        let contentid = "3232812276d";

        contentModel.findByIdAndDelete(contentid).then(function (result) {
            expect(result.rowsAffected).toEqual(0)
        }).catch(function () {
           console.log('Id not found')
        })
    })
})
