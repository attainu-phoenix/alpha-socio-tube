"use strict";

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  var title = request.body.title;
  var content = request.body.content;
  var organizer = request.body.organizer;
  var Date = request.body.Date;

  var obj = {
    title:title,
    content: content,
    organizer: organizer,
    Date: Date
  };

  var multiparty = require("multiparty");

   //receive the upload data

   var uplaodData = new multiparty.Form({
      autofiles: true,
       uploadDir: "Public/eventImage"
   });

   uplaodData.parse(request,function(error,field,files){
     console.log(files);

     obj.originalFileName = files.image[0].originalFilename;
     obj.filename = files.image[0].path.split("/")[1];
     
     console.log(obj);
  
  DB.collection("events").insertOne(obj, function(error, obj) {
    return response.render("adminDashboard.hbs");
  });
})

  
};

exports.adminEventPost = adminEventPost;
