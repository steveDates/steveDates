select * from matched_users mu
join messages m on m.chat_id = mu.chat_id
join users_profile up on up.users_id = mu.user_one or up.users_id = mu.user_two
where mu.chat_id = $1