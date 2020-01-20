select them.* from users_profile them
join users_profile me on ((me.users_gender_male <> them.users_gender_male and me.users_gender_preference_standard) or
(me.users_gender_male = them.users_gender_male and me.users_gender_preference_standard = false) and them.users_profile_id <> $1)
and me.users_profile_id = $1