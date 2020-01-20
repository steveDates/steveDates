select them.* from users_profile them
join users_profile me on (them.users_age between me.users_age_preference_min and me.users_age_preference_max)
and me.users_profile_id = $1



-- select * from users_profile
-- where users_age between users_age_preference_min and users_age_preference_max
-- and users_profile_id <> $1