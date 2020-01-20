const bcrypt = require('bcrypt')
module.exports = {
    login: async(req,res) => {
        const {users_email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db')
        let user = await db.auth.check_user(users_email);
        user = user[0];
        if(!user){
            return res.status(400).send('EMAIL DOESN’T EXIST YO!')
        }
        const authenticated = bcrypt.compareSync(password, user.password);
        if(authenticated){
            delete user.password;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('INCORRECT PASSWORD YO!')
        }
    },
    register: async(req,res) => {
        const {users_email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db')
        //CHECK TO SEE IF USER EXISTS//
        let user = await db.auth.check_user(users_email);
        user = user[0]
        console.log(`user: ${user}`)
        if(user){
            return res.status(400).send('USER ALREADY EXISTS')
        }
        //IF THEY DON’T EXIST CONTINUE//
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash)
        let newUser = await db.auth.register_user([users_email, hash]).then(result => {
            newUser = newUser[0];
            console.log('we done it');
            session.user = newUser;
            console.log('we made it');
            res.status(200).send(session.user)
        }).catch(err => {
            res.status(500).send({message: 'FAILED TO REGISTER'})
        })
    },
    logout: (req,res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}