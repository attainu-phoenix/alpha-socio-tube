"use strict";

var logout = function(request, response) {
  request.session.user = null;
  request.session.admin = null;
  response.redirect("/login");
};

exports.logout = logout;
