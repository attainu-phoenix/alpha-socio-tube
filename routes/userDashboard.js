"use strict";

var userDashboard = function(req, res) {
  if (!req.session.data) {
   return res.redirect("/login");
  } else {
    res.render("userDashboard.hbs");
  }
};

exports.userDashboard = userDashboard;
