"use strict";

var login = function(req, res) {
  var errors = [];
  var DB = req.app.locals.DB;

  var email = req.body.email;
  var password = req.body.password;

  DB.collection("users").findOne({ email: email }, function(error, user) {
    if (error) {
      errors.push({ text: "Invalid email or password" });
      return res.render("login.hbs", { errors: errors });
    }
    if (user) {
      if (user.password == password) {
        req.session.user = user;
        return res.redirect("/userDashboard");
      } else {
        errors.push({ text: "Invalid password" });
        return res.render("login.hbs", { errors: errors });
      }
    }
  });
};

exports.login = login;
