"use strict";

var events = function(request, response) {
  response.render("events.hbs");
};

exports.events = events;
