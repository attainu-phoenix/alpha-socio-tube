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
var admin = require("./routes/AdminLogin");
var adminEvent = require("./routes/adminEvent");
var logout = require("./routes/logout");

// require post requests
var signUpPost = require("./routes/signUpPost");
var loginPost = require("./routes/loginPost");
var adminEventPost = require("./routes/AdminEventPost");
var uploadPost = require("./routes/uploadPost");
var adminLoginPost = require("./routes/AdminLoginPost");
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

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/socioApp", {
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

app.get("/admin", admin.admin);

app.get("/adminEvent", adminEvent.adminEvent);

app.get("/logout", logout.logout);

// post request routes
app.post("/signUp", signUpPost.signUp);

app.post("/login", loginPost.login);

app.post("/adminEventPost", adminEventPost.adminEventPost);

app.post("/admin", adminLoginPost.admin);

app.post("/upload", uploadPost.uploadPost);

app.post("/delete/:mongoId", deletePost.deletePost);

app.post("/acceptPost", acceptPost.acceptPost);

app.listen(3000, function(req, res) {
  console.log("app has been started at port 3000");
});
