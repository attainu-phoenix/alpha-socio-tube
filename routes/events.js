"use strict";

var events = function(request, response) {
  var DB = request.app.locals.DB;

  DB.collection("events")
    .find({})
    .toArray(function(error, data) {
      if (error) {
        return console.log("couldnt get the data");
      } else {
        var eventArrayOfTwo = [];
        for (var i = 0; i < data.length; i += 2) {
          eventArrayOfTwo.push(data.slice(i, i + 2));
        }
        console.log(eventArrayOfTwo);
        var data = {
          eventArrayOfTwo: eventArrayOfTwo,
          user: request.session.user,
          admin: request.session.admin
        };
        return response.render("events.hbs", data);
      }
    });
};

exports.events = events;
