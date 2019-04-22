"use strict";
var myVideos = function(req, res) {
  if (!req.session.data) {
    return res.redirect("/login");
  } else {
    res.render("myVideos.hbs");
  }
};
exports.myVideos = myVideos;