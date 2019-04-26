"use strict";

// All the require module has added here
var express = require("express");
var mongo = require("mongodb");
var bodyParser = require("body-parser");
var session = require("express-session");

// require get requests
var landingPage = require("./routes/landingPage");
var login = require("./routes/login");
var signUp = require("./routes/signUp");
var events = require("./routes/events");
var myVideos = require("./routes/myVideos");
var newRequests = require("./routes/newRequests");
var upload = require("./routes/upload");
var userDashboard = require("./routes/userDashboard");
var adminDashboard = require("./routes/adminDashboard");
var addEvent = require("./routes/addEvent");
var adminLogin = require("./routes/adminLogin");
var adminEvent = require("./routes/adminEvent");
var logout = require("./routes/logout");

// require post requests
var signUpPost = require("./routes/signUpPost");
var loginPost = require("./routes/loginPost");
var adminEventPost = require("./routes/adminEventPost");
var uploadPost = require("./routes/uploadPost");
var adminLoginPost = require("./routes/adminLoginPost");
var deletePost = require("./routes/deletePost");
var acceptPost = require("./routes/acceptPost");

//express app has started
var app = express();
app.use(session({ secret: "catkey" }));

//setting and configuration has done here
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

//static folder
app.use(express.static("public"));

//The mongo connection
let DB;

var DB_URL = process.env.DB_URL || "mongodb://localhost:27017/socioApp";

let mongoClient = new mongo.MongoClient(DB_URL, {
  useNewUrlParser: true
});

mongoClient.connect(function(error) {
  if (error) {
    return console.log("Error connecting to database");
  } else {
    console.log("database has been connected");
    DB = mongoClient.db("socioApp");
    app.locals.DB = DB;
  }
});

// get request routes
app.get("/", landingPage.landingPage);

app.get("/events", events.events);

app.get("/adminDashboard/addEvent", addEvent.addEvent);

app.get("/login", login.login);

app.get("/signUp", signUp.signUp);

app.get("/userDashboard", userDashboard.userDashboard);

app.get("/upload", upload.upload);

app.get("/myVideos", myVideos.myVideos);

app.get("/adminDashboard", adminDashboard.adminDashboard);

app.get("/newRequests", newRequests.newRequests);

app.get("/adminLogin", adminLogin.adminLogin);

app.get("/adminEvent", adminEvent.adminEvent);

app.get("/logout", logout.logout);

// post request routes
app.post("/signUp", signUpPost.signUp);

app.post("/login", loginPost.login);

app.post("/adminEventPost", adminEventPost.adminEventPost);

app.post("/adminLogin", adminLoginPost.adminLogin);

app.post("/upload", uploadPost.uploadPost);

app.post("/delete/:mongoId", deletePost.deletePost);

app.post("/acceptPost/:mongoId", acceptPost.acceptPost);

var PORT = process.env.Port || 3000;

app.listen(PORT, function(req, res) {
  console.log("app has been started at port 3000");
});
