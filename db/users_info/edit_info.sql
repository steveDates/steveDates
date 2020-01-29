update users_profile set (
    users_id,
    users_image,
    users_age,
    users_zipcode,
    users_gender_male,
    users_bio,
    users_first_name,
    users_phone_number_current,
    users_working
) = (
    ${users_id},
    ${profileImg},
    ${age},
    ${zipCode},
    ${gender},
    ${bio},
    ${firstName},
    ${phoneNumber},
    ${working}
) where users_id = ${users_id};