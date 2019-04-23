"use strict";

var events = function(request, response) {
  var DB = request.app.locals.DB;

  DB.collection("events")
    .find({})
    .toArray(function(error, data) {
      console.log(data);
      if (error) {
        return console.log("couldnt get the data");
      } else {
        var data = {
          data: data,
          user: request.session.data
        };
        return response.render("events.hbs", data);
      }
    });
};

exports.events = events;
