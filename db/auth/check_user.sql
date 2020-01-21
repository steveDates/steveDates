select * from users
left join users_profile on users.users_id = users_profile.users_id
where users.users_email = $1;