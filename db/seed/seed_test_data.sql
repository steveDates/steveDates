
delete from users_activities where users_id > 100000;
delete from users_profile where users_profile_id > 100000;
delete from users where users_id > 100000;
--password abc
insert into users (users_id, users_email, password)
values (100001, 'jenny1@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100002, 'jenny2@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100003, 'jenny3@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');


insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100001, 100001, 19, 18, 24, 84094, 1234, 20, false, true, 'Testing #10', 'Jenny');
insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100002, 100002, 19, 18, 24, 84094, 1234, 20, true, true, 'Testing #10', 'Jenny2');
insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100003, 100003, 19, 18, 24, 84094, 1234, 20, false, true, 'Testing #10', 'Jenny3');

insert into users_activities(users_id, activity_id) values (
    100001, 1
);
insert into users_activities(users_id, activity_id) values (
    100001, 2
);
insert into users_activities(users_id, activity_id) values (
    100001, 3
);

insert into users_activities(users_id, activity_id) values (
    100002, 4
);
insert into users_activities(users_id, activity_id) values (
    100002, 5
);
insert into users_activities(users_id, activity_id) values (
    100003, 6
);

insert into users_activities(users_id, activity_id) values (
    100003, 1
);
insert into users_activities(users_id, activity_id) values (
    100003, 7
);
insert into users_activities(users_id, activity_id) values (
    100003, 8
);



