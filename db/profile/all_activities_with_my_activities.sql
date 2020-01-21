select activity.activity_id, activity.activity_name,
case when users_activities.users_id is null then false
else true
end as is_selected from activity
left join users_activities on users_activities.activity_id = activity.activity_id 
and users_activities.users_id = $1
order by activity.activity_id