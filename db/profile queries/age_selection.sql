select * from users_profile
where users_age between users_age_preference_min and users_age_preference_max
and users_profile_id <> $1
