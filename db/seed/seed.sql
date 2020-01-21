create table users (
users_id serial primary key,
users_email varchar(100),
password varchar(250)
);

create table users_profile (
users_profile_id serial primary key,
users_id int references users(users_id),
users_image text,
users_age int,
users_age_preference_min int,
users_age_preference_max int,
users_zipcode int,
users_zipcode_ext int,
users_preference_proximity_max int,
users_gender_male boolean,
users_gender_preference_standard boolean,
users_bio varchar(500),
users_first_name varchar(50)
);

create table activity (
activity_id serial primary key,
activity_name varchar(40)
);

create table users_activities (
users_id int references users(users_id),
activity_id int references activity(activity_id)
);

create table messages (
users_messages_id serial primary key,
users_message varchar(500),
message_time date
);

create table users_sent_message (
users_sent_id serial primary key,
users_profile_id int references users_profile(users_profile_id),
users_messages_id int references messages(users_messages_id)
);

create table users_received_message (
users_received_id serial primary key,
users_profile_id int references users_profile(users_profile_id),
users_messages_id int references messages(users_messages_id)
);

create table match_options(
users_id int references users(users_id),
users_id2 int,
match boolean
);

--views
create view users_profile_activities as 
select a.*, b.activity_id, c.activity_name from users_profile a 
join users_activities b on a.users_id = b.users_id
join activity c on c.activity_id = b.activity_id;