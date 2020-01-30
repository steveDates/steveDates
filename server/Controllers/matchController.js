module.exports = {
    getMatches: (req,res) => {
        const {users_id} = req.session.user
        console.log(users_id)
        const db = req.app.get('db')
        db.matches.get_matches(users_id).then(result => {
            res.status(200).send(result)
        })
    },

    getChats: (req,res) => {
        const {users_id} = req.session.user;
        const db = req.app.get('db')
        let { chat_id } = req.params
        chat_id = +chat_id
        console.log('users_id:', users_id, "chat_id:", chat_id)
        db.matches.get_chats({chat_id, users_id}).then(result => {
            res.status(200).send(result)
        })
    },
    getMessages:(req, res) => {
        const db = req.app.get('db');
        let {chat_id} = req.body;
        console.log('chat:', chat_id)
        chat_id = +chat_id;
        db.matches.get_messages({chat_id}).then(result =>{
            res.status(200).send(result)})
    }
}