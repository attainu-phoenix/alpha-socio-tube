"use strict";
var myVideos = function(req, res) {
<<<<<<< HEAD
  if (!req.session.data) {
    return res.redirect("/login");
  } else {
    res.render("myVideos.hbs");
  }
=======
  var DB = req.app.locals.DB;

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
       return  res.render("myVideos.hbs", { videoArrayOfTwo: videoArrayOfTwo });
      }
    });
>>>>>>> 0620fef28155c05bda5f2c9882cbf856ec53c759
};
exports.myVideos = myVideos;