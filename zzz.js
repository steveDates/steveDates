let my_activities = await db.users_activities.find({users_id: users_id});
let their_activities = await db.users_activities.find({users_id: theirs});

function compare(my_activities, their_activities){
    my_activities.forEach((e1)=>
        their_activities.forEach((e2)=>{
            if(e1 === e2){
                return true;
            }
        })
    )
}