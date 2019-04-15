"use strict";

var addEvent = function(request, response) {
  response.render("addEvent.hbs");
};

exports.addEvent = addEvent;
