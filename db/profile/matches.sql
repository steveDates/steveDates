select * from users_profile_activities a
where a.users_id <> $1
and a.users_gender_male = $2
and a.users_age between $3 and $4 
and a.users_zipcode = $5
and a.activity_id in (
select activity_id from users_activities 
where users_activities.users_id = $1
)