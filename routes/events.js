"use strict";


var events = function(request, response) {
    var DB = request.app.locals.DB;
    DB.collection("events")
     .find({})
     .toArray(function(error, data) {

       var data = {
         data:data
       }
       response.render("events.hbs", data);
     });
    }
  
    

exports.events = events;
