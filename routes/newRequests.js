"use strict";

var newRequests = function(req, res) {
  if (!req.session.data) {
    return res.redirect("/adminDashboard");
  } else {
    var DB = req.app.locals.DB;
    DB.collection("videos")
      .find({ approved: false })
      .toArray(function(error, data) {
        if (error) {
          console.log("couldnt upload db error");
        } else {
          var videoArrayOfTwo = [];
          for (var i = 0; i < data.length; i += 2) {
            videoArrayOfTwo.push(data.slice(i, i + 2));
          }
          return res.render("newRequests.hbs", {
            videoArrayOfTwo: videoArrayOfTwo
          });
        }
      });
  }
};
exports.newRequests = newRequests;
