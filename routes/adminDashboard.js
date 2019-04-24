"use strict";

var adminDashboard = function(req, res) {
  if (!req.session.admin) {
    return res.redirect("/adminLogin");
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
        return res.render("adminDashboard.hbs", {
          videoArrayOfTwo: videoArrayOfTwo,
        });
      }
    });
};
exports.adminDashboard = adminDashboard;
