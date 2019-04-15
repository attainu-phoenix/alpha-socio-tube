"use strict";

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  var title = request.body.title;
  var content = request.body.content;
  var organizer = request.body.organizer;
  var Date = request.body.Date;

  var obj = {
    title: title,
    content: content,
    organizer: organizer,
    Date: Date
  };

  DB.collection("events").insertOne(obj, function(error, obj) {
    console.log("error occured in AdminEventPost");
  });

  return response.render("events.hbs");
};

exports.adminEventPost = adminEventPost;
