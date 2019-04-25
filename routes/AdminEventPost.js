"use strict";

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  var multiparty = require("multiparty");

  //receive the upload data

  var uploadData = new multiparty.Form({
    autoFiles: true,
    uploadDir: "public/eventImage"
  });

  uploadData.parse(request, function(error, field, files) {
    var title = field.title;
    var content = field.content;
    var organizer = field.organizer;
    var Date = field.Date;

    var obj = {
      title: title,
      content: content,
      organizer: organizer,
      Date: Date
    };

    obj.originalFileName = files.image[0].originalFilename;
    obj.filename = files.image[0].path.split("\\")[2];

    console.log("entered event post");

    DB.collection("events").insertOne(obj, function(error, obj) {
      if (error) {
        response.send("error inserting data into the DB");
        return;
      }
      return response.render("upload.hbs", {
        success: "added event successfully"
      });
    });
  });
};

exports.adminEventPost = adminEventPost;
