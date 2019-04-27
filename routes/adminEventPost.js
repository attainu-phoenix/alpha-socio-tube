"use strict";
var multiparty = require("multiparty");
var cloudinary = require("cloudinary").v2;

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  //receive the upload data

  var uploadData = new multiparty.Form({
    autoFiles: true,
    uploadDir: "public/eventImage"
  });

  uploadData.parse(request, function(error, field, files) {
    var title = field.title[0];
    var content = field.content[0];
    var organizer = field.organizer[0];

    var Date = field.Date[0];

    var obj = {
      title: title,
      content: content,
      organizer: organizer,
      Date: Date
    };

    obj.originalFileName = files.image[0].originalFilename;
    obj.filename = files.image[0].path.split("\\")[2];
    obj.path = files.image[0].path;

    console.log("entered event post");
    cloudinary.uploader.upload(obj.path, { resource_type: "auto" }, function(
      error,
      result
    ) {
      if (error) {
        return res.send("error uploading..");
      }
      if (result) {
        obj.cloudPath = result.secure_url;
        DB.collection("events").insertOne(obj, function(error, obj) {
          if (error) {
            response.send("error inserting data into the DB");
            return;
          }
          return response.render("upload.hbs", {
            success: "added event successfully"
          });
        });
      }
    });
  });
};

exports.adminEventPost = adminEventPost;
