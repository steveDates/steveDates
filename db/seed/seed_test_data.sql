
delete from users_activities where users_id > 100000;
delete from users_profile where users_profile_id > 100000;
delete from users where users_id > 100000;
--password abc
insert into users (users_id, users_email, password)
values (100004, 'test1@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100005, 'test22@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100006, 'test3@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');


insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100004, 100004, 20, 22, 28, 84096, 1234, 10, false, true, 'test jan 22', 'Stacy');
insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100005, 100005, 22, 20, 30, 84046, 1234, 20, true, true, 'test jan 22', 'Brad');
insert into users_profile (users_profile_id, users_id, users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100006, 100006, 29, 27, 45, 84092, 1234, 5, true, true, 'test jan 22', 'Ben');

insert into users_activities(users_id, activity_id) values (
    100004, 10
);
insert into users_activities(users_id, activity_id) values (
    100004, 11
);
insert into users_activities(users_id, activity_id) values (
    100004, 12
);

insert into users_activities(users_id, activity_id) values (
    100005, 10
);
insert into users_activities(users_id, activity_id) values (
    100005, 11
);
insert into users_activities(users_id, activity_id) values (
    100005, 12
);

insert into users_activities(users_id, activity_id) values (
    100006, 13
);
insert into users_activities(users_id, activity_id) values (
    100006, 14
);
insert into users_activities(users_id, activity_id) values (
    100006, 12
);



