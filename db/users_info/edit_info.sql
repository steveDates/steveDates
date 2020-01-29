update users_profile set (
    users_id,
    users_image,
    users_zipcode,
    users_bio,
    users_first_name,
    users_phone_number_current,
    users_working
) = (
    ${users_id},
    ${profileImg},
    ${zipCode},
    ${bio},
    ${firstName},
    ${phoneNumber},
    ${working}
) where users_id = ${users_id};