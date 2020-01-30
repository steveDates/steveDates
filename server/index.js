require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  gradient = require("gradient-string"),
  session = require("express-session"),
  aws = require("aws-sdk"),
  socket = require("socket.io"),
  authCtrl = require("./Controllers/authController"),
  userCtrl = require("./Controllers/userController"),
  profileCtrl = require("./Controllers/profileController"),
  swipeCtrl = require("./Controllers/swipeController"),
  matchCtrl = require("./Controllers/matchController"),
  {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY
  } = process.env,
  app = express();

app.use(express.json());

io = socket(
  app.listen(SERVER_PORT, () =>
    console.log(gradient.fruit(`Server running on ${SERVER_PORT}`))
  )
);

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  })
);

//=========== AMAZON S3 =========== //
app.get("/sign-s3", (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  };
  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };
  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    return res.send(returnData);
  });
});
// ============= S3 END =============== //

// ========= SOCKET.IO START ========== //

// REGULAR ENDPOINTS HERE
app.get("/api/example", (req, res, next) => {
  res.status(200).send("hello");
});

io.on("connection", socket => {
  console.log("User Connected");

  socket.on("join room", async data => {
    console.log("join room", data);

    const { room } = data;

    const db = app.get("db");
    console.log("Room joined", room);
    let existingRoom = await db.chat.check_match(+room);
    // HOW DO I CREATE ROOM FROM MATCH? //
    // !existingRoom.length ? db.chat.create_room({ match_id: +room }) : null;
    let messages = await db.chat.get_chat_history( +room);
    socket.join(+room);
    console.log(room);
    io.to(+room).emit("room joined", messages);
  });

  socket.on("message sent", async data => {
    console.log("message sent", data);

    //USER_ID IS SENDER//
    const { room, message, sender} = data;
    //destructure and put proper values in and it should work
    // console.log('Room', room)
    // const db = req.app.get('db')
    // const {users_id} = req.session.user
    //NEED TO ASSIGN USERS_ID TO SENDER//
    const db = app.get("db");
    await db.chat.create_message({ chat_id: +room, message, sender });
    console.log("message", message);
    // why are you sending all messages here?  Should you just send the message we are hanlding in this call? 
    // let messages = await db.chat.get_chat_history({
    //   chat_id: +room,
    //   users_id
    // });
    io.to(+room).emit("message dispatched", message);
    console.log('ending send mess')
  });

  socket.on("disconnect", x => {
    console.log("User Disconnected", x);
  });
});
// ========= SOCKET.IO END ========== //

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log(gradient.summer("db is super connected"));
});

// ===== ===== AUTH ===== =====

app.get("/me", authCtrl.getMe);
app.post("/api/login", authCtrl.login);
app.post("/api/register", authCtrl.register);
app.post("/api/logout", authCtrl.logout);

// ===== ===== USER ===== =====

app.post("/api/profileInfo", userCtrl.addUserInfo);
app.put("/api/profileInfo", userCtrl.updateUserInfo);
app.get("/api/activities", userCtrl.getActivities);
app.post("/api/activities", userCtrl.saveActivities);
app.get("/api/user-photos", userCtrl.getUserImgs);
app.put("/api/photos", userCtrl.addUserImgs);

// ===== ===== SWIPES ===== =====

app.post("/api/swipe", swipeCtrl.addSwipe);

// Profile Endpoints
app.get("/api/potentials", profileCtrl.getPotentialsByZip);
app.post("/api/addMatchInterest", profileCtrl.addMatchInterest);

// === === MATCH === === //

app.get("/api/matches", matchCtrl.getMatches);
app.get("/api/chats/:chat_id", matchCtrl.getChats);

// const port = 4040;
