insert into users (
    users_email,
) values (
    $1
)

returning users_id, users_email;