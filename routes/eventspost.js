"use strict";

var eventspost = function(request, response) {
    var DB = request.app.locals.DB;
  DB.collection("events").find({}).toArray(function(error ,data){
    console.log(data);
      var title =request.body.title;
      var content = request.body.content;
    var data = {
      title : title,
      content : content
    }
    response.render("events.hbs" , data);
  })
};

exports.eventspost = eventspost;