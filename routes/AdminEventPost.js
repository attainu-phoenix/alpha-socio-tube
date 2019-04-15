'use strict';

var AdminEventsPost = function(request,response){
    var DB =app.locals.DB = DB;

    var title = request.body.title;
    var content = request.body.content;
    var organizer = request.body.organizer;
    var Date =request.body.Date;
      
    var obj = {
        title : title,
        content: content,
        organizer : organizer,
        Date : Date
    }

    DB.collection("events").insertOne( obj ,function(error,obj){
        console.log("error occured in AdminEventPost");
    })

 return response.render("AdminDashbaord.hbs");
}

exports.AdminEventsPost = AdminEventsPost;