	
require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    gradient = require('gradient-string'),
    session = require('express-session'),
    authCtrl = require('./Controllers/authController'),
<<<<<<< HEAD
    userCtrl = require('./Controllers/userController'),
=======
    profileCtrl = require('./Conrollers/profileController')
>>>>>>> master
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    app = express();
 
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive(CONNECTION_STRING).then(db=>{app.set('db', db);
console.log(gradient.summer('db connected'))})

// ===== ===== AUTH ===== =====

app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/logout', authCtrl.logout)

// ===== ===== SIGN UP SETTINGS ===== =====

app.post('/api/profileInfo', userCtrl.addUserInfo)

// Profile Endpoints
app.get('/api/potentials', profileCtrl.getPotentials)

// const port = 4040;
app.listen(SERVER_PORT, () => console.log(gradient.fruit(`Server running on ${SERVER_PORT}`)));
