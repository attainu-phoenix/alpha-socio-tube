"use strict";

var adminLogin = function(request, response) {
  var DB = request.app.locals.DB;
  var email = request.body.email;
  var password = request.body.password;

  DB.collection("adminLogin").findOne({ email: email }, function(error, admin) {
    if (error) {
      return response.redirect("/adminLogin");
    } else if (admin.password == password) {
      request.session.admin = admin;
      return response.redirect("/adminDashboard");
    } else {
      return response.redirect("/adminLogin");
    }
  });
};

exports.adminLogin = adminLogin;
