module.exports = {
    addSwipe: async (req, res) => {
        const db = req.app.get('db');
        const {users_id} = req.session.user;
        const {their_id, interest_level} = req.body;
        // console.log('their id:', their_id);
        // console.log('int lev', interest_level);
        await db.swipe.add_swipe({users_id, their_id, interest_level});
        
        let theirSwipe = await db.swipe.get_their_swipe(their_id);
        console.log('theirswipe', theirSwipe[0])
        theirSwipe = theirSwipe[0].interest_level;
        if (interest_level === 1 && theirSwipe === 1){
            db.swipe.add_love({users_id, their_id});
            db.matches.create_matched_users({user_one:users_id, user_two:their_id, friend_zone:true });
        }
        if( (interest_level === 1 && theirSwipe === 2) ||
            (interest_level === 2 && theirSwipe === 1) ||
            (interest_level === 2 && theirSwipe === 2)){
            db.swipe.add_friend({users_id, their_id});
            db.matches.create_matched_users({user_one:users_id, user_two:their_id, friend_zone:true });

        }
        res.sendStatus(200);
    }
}