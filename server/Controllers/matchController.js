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
        const db = req.app.get('db')
        const { chat_id } = req.params
        console.log('chat-id', chat_id)
        db.matches.get_chats(chat_id).then(result => {
            res.status(200).send(result)
        })
    }
}