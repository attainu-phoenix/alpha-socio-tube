"use strict";

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  var multiparty = require("multiparty");

  //receive the upload data

  var uploadData = new multiparty.Form({
    autoFiles: true,
    uploadDir: "Public/eventImage"
  });

  uploadData.parse(request, function(error, field, files) {
    console.log(field);

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

    console.log(obj);

    DB.collection("events").insertOne(obj, function(error, obj) {
      return response.render("adminDashboard.hbs");
    });
  });
};

exports.adminEventPost = adminEventPost;
