
delete from users_activities where users_id > 100000;
delete from users_profile where users_profile_id > 100000;
delete from users where users_id > 100000;
--password abc
insert into users (users_id, users_email, password)
values (100062, 'Bob1@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100063, 'Bob2@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100064, 'Bob3@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100065, 'Bob1@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100066, 'Bob2@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');
insert into users (users_id, users_email, password)
values (100067, 'Bob3@mail.com', '$2b$10$JnecPja78n73hxlY.bjjaORrSid0zptVpNxGf6qEp28T8YwsZeILG');


insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100062, 100062, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 18, 21, 35, 84060, null, 50, true, true, 'All my single ladies!', 'Bob');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100063, 100063, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 29, 31, 35, 84060, null, 50, true, false, 'All my single ladies!', 'Bob2');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100064, 100064, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 32, 18, 35, 84060, null, 50, true, true, 'All my single ladies!', 'Bob3');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100065, 100065, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 22, 21, 35, 84060, null, 50, true, false, 'All my single ladies!', 'Bob4');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100066, 100066, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 48, 35, 50, 84060, null, 50, true, false, 'All my single ladies!', 'Bob5');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100067, 100067, 'https://stevedates.s3.amazonaws.com/049e5277-fb70-4087-9e88-239cb5eedc74-bobross.jpeg', 41, 18, 45, 84060, null, 50, true, true, 'All my single ladies!', 'Bob6');

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



