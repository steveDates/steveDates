module.exports = {
    addUserInfo: (req,res) => {
        const db = req.app.get('db')
        const {users_id} = req.session.user
        const {profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio} = req.body
        db.users_info.add_info({users_id, profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio}).then(() => res.sendStatus(200)).catch(err => console.log(err))
    },
    getActivities: async (req, res) => {
        const db = req.app.get('db')
        // let {users_id} = req.session.user;
        let activities = await db.profile.activities_get_all();
        let myActivities = await db.profile.activities_get_mine();
        res.status(200).send({activities, myActivities});
    },
    saveActivities: async (req, res) => {
        const db = req.app.get('db')
        const {myActivity1, myActivity2, myActivity3, myActivity4, maxDistance, maxAge, minAge} = req.body;
            id1 = (myActivity1 ? myActivity1.activity_id : null);
            id2 = (myActivity2 ? myActivity2.activity_id : null);
            id3 = (myActivity3 ? myActivity3.activity_id : null);
            id4 = (myActivity4 ? myActivity4.activity_id : null);
        const {users_id} = req.session.user;
        db.profile.preferences_update({id1, id2, id3, id4, users_id, maxDistance, maxAge, minAge});
        res.sendStatus(200);
    }
}