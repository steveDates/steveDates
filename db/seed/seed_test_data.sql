
delete from users_activities where users_id > 100000;
delete from users_profile where users_profile_id > 100000;
delete from users where users_id > 100000;
--password abc, or asdf
insert into users (users_id, users_email, password)
values (100110, 'C3PO-1', '$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');
insert into users (users_id, users_email, password)
values (100111, 'C3PO-2', '$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');
insert into users (users_id, users_email, password)
values (100112, 'C3PO-3', '$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');
insert into users (users_id, users_email, password)
values (100113, 'C3PO-4', '$$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');
insert into users (users_id, users_email, password)
values (100114, 'C3PO-5', '$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');
insert into users (users_id, users_email, password)
values (100115, 'C3PO-6', '$2a$10$RMwMcWxb4CUDIpDgcO1SbOTYqDZQ85qBkNaiLV9bWC/kEkFL3hjBm');



insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100110, 100110, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 18, 21, 35, 84101, null, 100, false, true, 'Space travel sound rather perilous', 'C3PO-1');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100111, 100111, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 29, 20, 40, 84101, null, 100, false, false, 'Space travel sound rather perilous', 'C3PO-2');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100112, 100112, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 32, 18, 35, 84101, null, 100, false, true, 'Space travel sound rather perilous', 'C3PO-3');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100113, 100113, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 22, 21, 35, 84101, null, 100, false, true, 'Space travel sound rather perilous', 'C3PO-4');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100114, 100114, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 25, 18, 50, 84101, null, 100, false, true, 'Space travel sound rather perilous', 'C3PO-5');
insert into users_profile (users_profile_id, users_id, users_image,users_age, users_age_preference_min, users_age_preference_max, users_zipcode, users_zipcode_ext, users_preference_proximity_max, users_gender_male, users_gender_preference_standard, users_bio, users_first_name)
values (100115, 100115, 'https://img.cinemablend.com/filter:scale/quill/7/e/9/b/6/f/7e9b6f625b1f06b8c70fe19107bf62bc0f44b6eb.jpg?mw=600', 28, 18, 45, 84101, null, 100, false, true, 'Space travel sound rather perilous', 'C3PO-6');

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



