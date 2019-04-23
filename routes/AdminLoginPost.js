"use strict";

var admin = function(request, response) {
  var DB = request.app.locals.DB;
  var email = request.body.email;
  var password = request.body.password;

  DB.collection("adminLogin").findOne({ email: email }, function(error, data) {
    request.session.data = data;
    console.log(request.session.data);
    if (request.session.data) {
      console.log("you are already logged in ");
      return response.redirect("/adminDashboard");
    } else if (error) {
      return response.render("adminLogin.hbs");
    } else if (data.password == password) {
      console.log("correct password");
      return response.render("adminDashboard.hbs");
    } else {
      return response.render("admin.hbs");
    }
  });
};

exports.admin = admin;
