"use strict";
var multiparty = require("multiparty");
var cloudinary = require("cloudinary").v2;

var adminEventPost = function(request, response) {
  var DB = request.app.locals.DB;

  //receive the upload data

  var uploadData = new multiparty.Form();

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

    // obj.originalFileName = files.image[0].originalFilename;
    // obj.filename = files.image[0].path.split("\\")[2];
    obj.path = files.image[0].path;
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
