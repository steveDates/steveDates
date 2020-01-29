delete from users_activities where users_id = ${users_id};

insert into users_activities(
    users_id,
    activity_id
) values (
    ${users_id},
    ${id1}
);
insert into users_activities(
    users_id,
    activity_id
) values(
    ${users_id},
    ${id2}
);
insert into users_activities(
    users_id,
    activity_id
) values(
    ${users_id},
    ${id3}
);
insert into users_activities(
    users_id,
    activity_id
) values(
    ${users_id},
    ${id4}
);

update users_profile
set users_preference_proximity_max = ${maxDistance},
    users_age_preference_min = ${minAge},
    users_age_preference_max = ${maxAge},
    users_gender_preference_standard = ${genderPreference}
where users_id = ${users_id};

select * from users_profile 
where users_id = ${users_id};