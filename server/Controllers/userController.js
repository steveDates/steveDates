module.exports = {
    addUserInfo: (req,res) => {
        const db = req.app.get('db')
        const {users_id} = req.session.user
        const {profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio} = req.body
        db.users_info.add_info({users_id, profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio}).then(() => res.sendStatus(200)).catch(err => console.log(err))
    }
}