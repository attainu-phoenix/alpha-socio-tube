"use strict";

var logout = function(request, response) {
  request.session.data = null;
  response.redirect("/");
};

exports.logout = logout;
