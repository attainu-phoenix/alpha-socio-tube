"use strict";

var adminDashboard = function(request, response) {
  if(!request.session.data){
    return response.redirect("/Admin");
  }
  var data = {
    data : request.session.data
  }
  response.render("adminDashboard.hbs", data);
};
exports.adminDashboard = adminDashboard;
