"use strict";


var events = function(request, response) {
    var DB = request.app.locals.DB;
    DB.collection("events")
     .find({})
     .toArray(function(error, data) {
       console.log(data);
       var title = data.title;
       var content =data.content;

       var data = {
         title : title,
         content :content
       }
       response.render("events.hbs", data);
     });
    }
  
    

exports.events = events;
