'use strict';

// All the require module has added here

var express = require("express");
var mongo = require("mongodb");
var bodyparser =require("body-parser");

//express app has started 
var app = express();


//setting and configuration has done here
app.set("view engine","hbs");
app.use(bodyparser.urlencoded({extended:false}));


app.get("/" , function(request,response){
    response.render("landingPage.hbs");
})

app.get("/events" , function(request,response){
    response.render("events.hbs");
})


app.get("/login" , function(request,response){
    response.render("login.hbs");
    // After login ,user can redirect to userDashboard page
})

app.get("/signup" , function(request,response){
    response.render("signup.hbs");
})

app.get("/userDashboard" , function(request,response){
    response.render("userDashboard.hbs");
})

app.get("/userDashboard/upload" ,function(request,response){
    response.render("upload.hbs");
})

app.get("/userDashboard/myvideos" ,function(request,response){
    response.render("myVideos.hbs");
})













app.listen(3000);