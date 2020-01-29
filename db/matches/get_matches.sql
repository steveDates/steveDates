select * from matched_users mu
join users_profile up on mu.user_two = up.users_id
where mu.user_one = $1
or mu.user_two = $1