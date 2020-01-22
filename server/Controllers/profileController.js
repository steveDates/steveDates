require("dotenv").config();
const axios = require("axios"),
  { RAPID_API_KEY } = process.env;

module.exports = {
    //will get zipcodes by your criteria
  getPotentialsByZip: async (req, res) => {
      let db = req.app.get('db')
      let data = []
      let newData
    const { users_zipcode, users_preference_proximity_max } = req.session.user;
    try {
        console.log(users_zipcode, users_preference_proximity_max)
      const zipData = await axios({
        method: "get",
        url: `https://redline-redline-zipcode.p.rapidapi.com/rest/radius.json/${users_zipcode}/${users_preference_proximity_max}/miles`,
        headers: {
          "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY
        }
      });
      console.log('zipdata', zipData)
      data = zipData.data.zip_codes
      newData = data.map(el => el.zip_code)
      let matches = await db.users_profile_activities.find({users_zipcode: newData})
      res.status(200).send({matches, data});
      console.log(matches)
    }
    catch(err){
        res.status(500).send(err)
    }
    console.log("data", newData)
  }
};
//iterate over the zipData and have it return just the zipcode, then either individually insert into the zipcode table or find massives way to do a bulk insert into the zipcode table


