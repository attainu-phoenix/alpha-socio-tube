"use strict";
var multiparty = require("multiparty");

var uploadPost = function(req, res) {
  var DB = req.app.locals.DB;

  // Receive the upload data
  var fileUpload = new multiparty.Form({
    autoFiles: true,
    uploadDir: "public/uploads"
  });

  fileUpload.parse(req, function(error, fields, files) {
    var data = {};
    data.title = fields.title[0];
    data.description = fields.description[0];
    data.message = fields.message[0];
    data.originalFileName = files.image[0].originalFilename;
    data.fileName = files.image[0].path.split("\\")[2];

    console.log(files);
    console.log(data);

    // Code for saving data
    DB.collection("videos").insertOne(data, function(error, dataInserted) {
      if (error) {
        response.send("error inserting data into the DB");
        return;
      }
      return res.redirect("/");
    });
  });
};

exports.uploadPost = uploadPost;
