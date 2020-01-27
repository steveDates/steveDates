select  
 users_image,
 users_image2,
 users_image3,
 users_image4,
 users_image5,
 users_image6 
from users_profile 
where users_id = $1
order by users_profile_id desc
limit 1