insert into matched_users(user_one, user_two, friend_zone)
values (
    ${user_one},
    ${user_two},
    ${friend_zone}
)
returning chat_id;