"use strict";

var admin = function(request, response) {
  var DB = request.app.locals.DB;
  var email = request.body.email;
  var password = request.body.password;

  DB.collection("adminLogin").findOne({ email: email }, function(error, data) {
    if (error) {
      return response.render("adminLogin.hbs");
    } else if (data.password == password) {
      request.session.data = data;
      return response.render("adminDashboard.hbs");
    } else {
      return response.render("admin.hbs");
    }
  });
};

exports.admin = admin;
