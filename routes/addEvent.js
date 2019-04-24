"use strict";

var addEvent = function(request, response) {
  if (!request.session.admin) {
    return response.redirect("/login");
  }
  response.render("addEvent.hbs");
};

exports.addEvent = addEvent;
