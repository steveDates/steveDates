const bcrypt = require('bcrypt')

module.exports = {
    login: async(res,res) => {
        const {users_email, password} = req.body;
        const {session} = req;
        const db = req.app.get('db')
        //UPDATE DB.FIND EMAIL AND HASH//
        let user = await db.check_user(users_email);
        user = user[0];
        if(!user){
            return res.status(400).send(`EMAIL DOESN'T EXIST YO!`)
        }
        const authenticated = bcrypt.compareSync(password, user.hash);
        if(authenticated){
            delete user.hash;
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
        let user = await db.check_user(users_email);
        user = user[0]
        if(user){
            return res.status(400).send('USER ALREADY EXISTS')
        }
        //IF THEY DON'T EXIST CONTINUE//
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user({users_email});
        db.insert_hash({hash, users_id: newUser[0].users_id}).then(result => {
            session.user = result[0]
            res.status(200).send(session.user)
        }).catch(err => {
            res.status(500).send({message: 'FAILED TO REGISTER'})
        })
    },
    logout: (req,res) => {

    }
}