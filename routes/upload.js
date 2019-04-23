"use strict";

var upload = function(req, res) {
  if (!req.session.data) {
    return res.redirect("/login");
  } else {
    res.render("upload.hbs", { admin: req.session.data.admin });
  }
};
exports.upload = upload;
