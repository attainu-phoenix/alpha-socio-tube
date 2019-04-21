"use strict";

var Admin = function(request, response) {
  if (request.session.data) {
    return response.redirect("/adminDashboard");
  }
  var data = {
    data: request.session.data
  };

  response.render("AdminLogin.hbs", data);
};

exports.Admin = Admin;
