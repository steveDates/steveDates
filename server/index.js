	
require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    gradient = require('gradient-string'),
    session = require('express-session'),
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
 
// const port = 4040;
app.listen(SERVER_PORT, () => console.log(gradient.fruit(`Server running on ${SERVER_PORT}`)));