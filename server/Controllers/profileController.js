require("dotenv").config();
const axios = require("axios"),
  { RAPID_API_KEY } = process.env;

module.exports = {
  getPotentials: async (req, res) => {
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
      res.status(200).send({zipData: zipData.data});
    }
    catch(err){
        res.status(500).send(err)
    }
  }
};
