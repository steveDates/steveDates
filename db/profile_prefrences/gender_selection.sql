select * from users_profile
where users_gender_male <> $1
and users_profile_id <> $2

