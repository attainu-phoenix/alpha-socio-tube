"use strict";

var signUp = function(req, res) {
  var errors = [];
  var success = [];
  var DB = req.app.locals.DB;

  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password !== password2) {
    errors.push({ text: "Passwords do not match" });
  }

  if (errors.length > 0) {
    return res.render("signUp.hbs", { errors: errors });
  }

  DB.collection("users").findOne({ email: email }, function(error, found) {
    if (found) {
      console.log("entered");
      errors.push({ text: "Email already exits" });
      return res.render("signUp.hbs", { errors: errors });
    } else {
      var data = {
        name: name,
        email: email,
        password: password,
        password: password2
      };
      DB.collection("users").insertOne(data, function(error, data) {
        if (error) {
          console.log("couldnt store to db");
        } else {
          success.push({ text: "Registered successfully" });
          return res.render("login", { success: success });
        }
      });
    }
  });
};

exports.signUp = signUp;
