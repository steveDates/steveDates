select them.* from users_profile them
join users_profile me on me.users_zipcode = them.users_zipcode 
and me.users_zipcode_ext = them.users_zipcode_ext


