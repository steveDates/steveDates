const bcrypt = require('bcryptjs')

module.exports = {
    login: async(req,res) => {
        const {users_email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db')
        let user = await db.auth.check_user(users_email);
        user = user[0];
        if(!user){
            return res.status(400).send(`EMAIL DOESN'T EXIST YO!`)
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
        if(user){
            return res.status(400).send('USER ALREADY EXISTS')
        }
        //IF THEY DON'T EXIST CONTINUE//
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.auth.register_user([users_email, hash]).then(result => {
            session.user = result[0]
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