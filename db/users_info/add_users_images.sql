 update users_profile set (
    users_image,
    users_image2,
    users_image3,
    users_image4,
    users_image5,
    users_image6
 ) = (
    ${profileImg},
    ${img2},
    ${img3},
    ${img4},
    ${img5},
    ${img6}
 ) where users_id = ${users_id}