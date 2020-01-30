module.exports = {
    addUserInfo: (req,res) => {
        const db = req.app.get('db')
        const {users_id} = req.session.user
        const {profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio} = req.body
        db.users_info.add_info({users_id, profileImg, firstName, gender, phoneNumber, age, working, zipCode, bio}).then(() => res.sendStatus(200)).catch(err => console.log(err))
    },
    updateUserInfo: (req, res) => {
        const db = req.app.get('db')
        const {users_id} = req.session.user
        const {profileImg, firstName, phoneNumber, working, zipCode, bio} = req.body
        db.users_info.edit_info({users_id, profileImg, firstName, phoneNumber, working, zipCode, bio}).then(() => res.sendStatus(200)).catch(err => console.log(err))
    },
    getActivities: async (req, res) => {
        const db = req.app.get('db')
        let {users_id} = req.session.user;
        let activities = await db.profile.activities_get_all();
        let myActivities = await db.profile.activities_get_mine(users_id);
        res.status(200).send({activities, myActivities});
    },
    saveActivities: async (req, res) => {
        const {session} = req;
        const db = req.app.get('db')
        const {myActivity1, myActivity2, myActivity3, myActivity4, maxDistance, maxAge, minAge, genderPreference} = req.body;
            id1 = (myActivity1 ? myActivity1.activity_id : null);
            id2 = (myActivity2 ? myActivity2.activity_id : null);
            id3 = (myActivity3 ? myActivity3.activity_id : null);
            id4 = (myActivity4 ? myActivity4.activity_id : null);
        const {users_id} = req.session.user;
        db.profile.preferences_update({id1, id2, id3, id4, users_id, maxDistance, maxAge, minAge, genderPreference}).then(result => {
            // You are only sending info from the users_profile table, not the users table.
            session.user = result[0]
            res.status(200).send(session.user)})

        // res.sendStatus(200);
        // const {
        //     profileImg, 
        //     firstName, 
        //     gender, 
        //     phoneNumber, 
        //     age, 
        //     working, 
        //     zipCode, 
        //     bio} = req.body
        // res.sendStatus(200)
    },

    getUserImgs: (req,res) => {
        const db = req.app.get('db')
        // let users_id = 60
        const {users_id} = req.session.user
        // console.log('USER ID', users_id, 'userCTRL, getUserImgs')
        db.users_info.get_users_imgs(users_id).then((images) => {
            imagesArray = Object.values(images[0]).filter(image => image)
            res.status(200).send(imagesArray)
        }).catch(err => console.log(err))
    },

    addUserImgs: (req,res) => {
        const db = req.app.get('db')
        // let users_id = 60
        const {users_id} = req.session.user
        const {
            profileImg,
            img2,
            img3,
            img4,
            img5,
            img6} = req.body
        db.users_info.add_users_images({
            users_id,
            profileImg,
            img2,
            img3,
            img4,
            img5,
            img6}).then(() => res.sendStatus(200)).catch(err => console.log(err))
    }
}