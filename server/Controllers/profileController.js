require("dotenv").config();
const axios = require("axios"),
  { RAPID_API_KEY } = process.env;

module.exports = {
  //will get zipcodes by your criteria
  getPotentialsByZip: async (req, res) => {
    let db = req.app.get("db");
    let data = [];
    let newData;
    console.log('profile ctrl is running');
    const {
      users_id,
      users_zipcode,
      users_preference_proximity_max,
      users_gender_male,
      users_age_preference_min,
      users_age_preference_max,
      users_gender_preference_standard
    } = req.session.user;
    console.log('user id:', users_id);
    try {
      const zipData = await axios({
        method: "get",
        url: `https://redline-redline-zipcode.p.rapidapi.com/rest/radius.json/${users_zipcode}/${users_preference_proximity_max}/miles`,
        headers: {
          "x-rapidapi-host": "redline-redline-zipcode.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY
        }
      });
      data = zipData.data.zip_codes;
    //   console.log(data);
      newData = data.map(el => el.zip_code);
      let matches = await db.users_profile.find({
        users_zipcode: newData,
        "users_id <>": users_id
      });
      let bestMatches = matches.filter((el, i) => {
        return (
          el.users_gender_male === users_gender_preference_standard &&
          el.users_gender_preference_standard === users_gender_male &&
          el.users_age >= users_age_preference_min &&
          el.users_age <= users_age_preference_max
        );
      });
    //   console.log("bestMatches", bestMatches);

      let usersIds = await bestMatches.map(el => el.users_id);
      let myActivities = await db.users_activities.find({ users_id: users_id });
      let myIds = await myActivities.map(el => el.activity_id);
      let theirActivities = await db.users_activities.find({
        users_id: usersIds
      });
      let matchesByActivity = theirActivities.filter(el =>
        myIds.includes(el.activity_id)
      );
      let matchedIds = matchesByActivity.map(el => el.users_id);
      let ultimateMatches = await bestMatches.filter(el =>
        matchedIds.includes(el.users_id)
      );
      
    //   console.log('ULTIMATE:', ultimateMatches);
      let myInterests = await db.swipes.find({ me: users_id });
    //   console.log('INTERESTS:',myInterests);
      let penUltimateMatches = ultimateMatches.filter(
        el => !myInterests.includes(mi => mi.them == el.users_id)
      );
      let usersFinalMatches = await db.profile.users_final_matches([users_id, users_id])
      penUltimateMatches = penUltimateMatches.filter(({users_id: theirUserId}) => {
        if(usersFinalMatches.findIndex(match => match.me === users_id && match.them === theirUserId) > -1){
          return false
        }
        if(usersFinalMatches.findIndex(match => match.them === users_id && match.me === theirUserId && match.interest_level === 3) > -1) {
          return false
        } else {
          return true
        }
      });
      res.status(200).send({ penUltimateMatches, data });
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addMatchInterest: async (req, res) => {
    const db = req.app.get("db");
    const { users_id } = req.session.user;
    const them = req.body.users_id;
    const interest_level = req.body.interest_level;
    await db.profile
      .matches({ me: users_id, them, interest_level })
      console.log("addMatchInterest success", users_id, them, interest_level); 
      let theirInterestLevelResonse = db.profile.users_final_matches([them, users_id])
      res.sendStatus(200)
      .catch(err => {
        console.log("addMatchInterest", err);
        res.sendStatus(500);
      });
  },
};
// after we save, in method above we need to check if they positively like them to us and if we match, if we do tell the front that we matched. save to messages when matched or create pop-up
// save to a socket room number



