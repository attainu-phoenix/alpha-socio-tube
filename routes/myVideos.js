"use strict";
var myVideos = function(req, res) {
  var DB = req.app.locals.DB;

  if (!req.session.data) {
    return res.redirect("/login");
  } else {
    DB.collection("videos")
      .find({})
      .toArray(function(error, data) {
        if (error) {
          console.log("couldnt upload db error");
        } else {
          var videoArrayOfTwo = [];
          for (var i = 0; i < data.length; i += 2) {
            videoArrayOfTwo.push(data.slice(i, i + 2));
          }
          return res.render("myVideos.hbs", {
            videoArrayOfTwo: videoArrayOfTwo
          });
        }
      });
  }
};
exports.myVideos = myVideos;
