"use strict";

var login = function(req, res) {
  var errors = [];
  var success = [];
  var DB = req.app.locals.DB;

  var email = req.body.email;
  var password = req.body.password;

  DB.collection("users").findOne({ email: email }, function(error, data) {
    if (error) {
      errors.push({ text: "Invalid email or password" });
      return res.render("login.hbs", { errors: errors });
    } else {
      if (data.password == password) {
        return res.render("userDashboard.hbs");
      } else {
        errors.push({ text: "Invalid password" });
        return res.render("login.hbs", { errors: errors });
      }
    }
  });
};

exports.login = login;
