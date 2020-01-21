select * from users_profile
where users_age between $1 and $2 
and users_profile_id <> $3
