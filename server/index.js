	
require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    gradient = require('gradient-string'),
    session = require('express-session'),
    aws = require('aws-sdk'),
    authCtrl = require('./Controllers/authController'),
    userCtrl = require('./Controllers/userController'),
    profileCtrl = require('./Controllers/profileController'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env,
    app = express();
 
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}))



//=========== AMAZON S3 =========== //
app.get('/sign-s3', (req, res) => {
    aws.config = {
        region: 'us-west-1',
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    };
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };
    s3.getSignedUrl('putObject', s3Params, (err,data)=> {
        if(err){
            console.log(err);
            return res.end();
        }
        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        return res.send(returnData)
    })
})
// ============= S3 END =============== //    

massive(CONNECTION_STRING).then(db=>{app.set('db', db);
console.log(gradient.summer('db connected'))});

// ===== ===== AUTH ===== =====

app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/logout', authCtrl.logout)

// ===== ===== USER ===== =====

app.post('/api/profileInfo', userCtrl.addUserInfo)
app.get('/api/activities', userCtrl.getActivities)
app.post('/api/activities', userCtrl.saveActivities)
app.get('/api/user-photos', userCtrl.getUserImgs)
app.put('/api/photos', userCtrl.addUserImgs)

// Profile Endpoints
app.get('/api/potentials', profileCtrl.getPotentialsByZip)
app.post('/api/addMatchInterest', profileCtrl.addMatchInterest)

// const port = 4040;
app.listen(SERVER_PORT, () => console.log(gradient.fruit(`Server running on ${SERVER_PORT}`)));
