module.exports = {
    addUserInfo: (req,res) => {
        const db = req.app.get('db')
        const {users_id} = req.session.user
        const {
            profileImg, 
            firstName, 
            gender, 
            phoneNumber, 
            age, 
            working, 
            zipCode, 
            bio} = req.body
        db.users_info.add_info({
            users_id, 
            profileImg, 
            firstName, 
            gender, 
            phoneNumber, 
            age, 
            working, 
            zipCode, 
            bio}).then(() => res.sendStatus(200)).catch(err => console.log(err))
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