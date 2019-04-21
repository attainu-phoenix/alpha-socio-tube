"use strict";

var Admin = function(request, response) {
  var DB = request.app.locals.DB;
  var email = request.body.email;
  var password = request.body.password;

  DB.collection("AdminLogin").findOne({ email: email }, function(error, data) {
    request.session.data = data;
    console.log(data);
    if (request.session.data) {
      console.log("you are already logged in ");
      return response.redirect("/adminDashboard");
    } else if (error) {
      return response.render("AdminLogin.hbs");
    } else if (data.password == password) {
      console.log("correct password");
      return response.render("AdminDashboard.hbs");
    } else {
      console.log(data);
      return response.render("Admin.hbs");
    }
  });
};

exports.Admin = Admin;
