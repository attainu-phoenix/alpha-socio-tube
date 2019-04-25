"use strict";

var upload = function(req, res) {
  if (req.session.user || req.session.admin) {
    var data = {
      user: req.session.user,
      admin: req.session.admin
    };

    return res.render("upload.hbs", data);
  } else {
    return res.redirect("/login");
  }
};
exports.upload = upload;
