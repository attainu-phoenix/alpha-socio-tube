"use strict";

var adminDashboard = function(req, res) {
  if (!req.session.data) {
    return res.redirect("/Admin");
  }
  var DB = req.app.locals.DB;

  DB.collection("videos")
    .find({ approved: true })
    .toArray(function(error, data) {
      if (error) {
        console.log("couldnt upload db error");
      } else {
        var videoArrayOfTwo = [];
        for (var i = 0; i < data.length; i += 2) {
          videoArrayOfTwo.push(data.slice(i, i + 2));
        }
        console.log(req.session.data.admin);
        return res.render("adminDashboard.hbs", {
          videoArrayOfTwo: videoArrayOfTwo,
          admin: req.session.data.admin
        });
      }
    });
};
exports.adminDashboard = adminDashboard;
