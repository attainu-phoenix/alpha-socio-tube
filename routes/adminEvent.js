"use strict";

var adminEvent = function(request, response) {
  var DB = request.app.locals.DB;

  DB.collection("events")
    .find({})
    .toArray(function(error, data) {
      if (error) {
        return console.log("couldnt get the data");
      } else {
        var data = {
          data: data,
          admin: request.session.data
        };
        return response.render("adminEvent.hbs", data);
      }
    });
};

exports.adminEvent = adminEvent;
