module.exports = {
    addSwipe: async (req, res) => {
        const db = req.app.get('db');
        const {users_id} = req.session.user;
        const {their_id, interest_level} = req.body;
        // console.log('their id:', their_id);
        await db.swipe.add_swipe({users_id, their_id, interest_level});
        let theirSwipe = await db.swipe.get_their_swipe(their_id);
        theirSwipe = theirSwipe[0].interest_level;
        if (interest_level === 1 && theirSwipe === 1){
            db.swipe.add_love({users_id, their_id});
        }
        if( (interest_level === 1 && theirSwipe === 2) ||
            (interest_level === 2 && theirSwipe === 1) ||
            (interest_level === 2 && theirSwipe === 2)){
            db.swipe.add_friend({users_id, their_id});
        }
        res.sendStatus(200);
    }
}