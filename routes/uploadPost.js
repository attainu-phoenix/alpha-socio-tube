"use strict";
var multiparty = require("multiparty");
var cloudinary = require("cloudinary").v2;

var uploadPost = function(req, res) {
  var DB = req.app.locals.DB;

  // Receive the upload data
  var fileUpload = new multiparty.Form({
    autoFiles: true,
    uploadDir: "public/uploads"
  });

  fileUpload.parse(req, function(error, fields, files) {
    var data = {};
    console.log(fields);
    data.title = fields.title[0];
    data.description = fields.description[0];
    data.originalFileName = files.image[0].originalFilename;
    data.path = files.image[0].path;
    data.fileName = files.image[0].path.split("\\")[2];
    data.createdBy = req.session.user._id;
    data.approved = false;

    cloudinary.uploader.upload(data.path, { resource_type: "auto" }, function(
      error,
      result
    ) {
      if (error) {
        return res.send("error uploading..");
      }
      if (result) {
        data.cloudPath = result.secure_url;
        DB.collection("videos").insertOne(data, function(error, dataInserted) {
          if (error) {
            return res.send("error inserting data into the DB");
          }
          if (dataInserted) {
            return res.render("upload.hbs", {
              success: "uploaded successfully"
            });
          }
        });
      }
    });
  });
};

exports.uploadPost = uploadPost;
