insert into users (
    users_email,
    password
) values (
    $1,
    $2
)

returning users_id, users_email;