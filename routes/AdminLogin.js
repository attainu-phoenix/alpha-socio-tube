"use strict";

var admin = function(request, response) {
  if (request.session.data) {
    return response.redirect("/adminDashboard");
  }
  var data = {
    data: request.session.data
  };

  response.render("adminLogin.hbs", data);
};

exports.admin = admin;
