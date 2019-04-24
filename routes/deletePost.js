"use strict";

var mongodb = require("mongodb");

var deletePost = function(req, res) {
  var DB = req.app.locals.DB;

  var mongoId = req.params.mongoId;

  DB.collection("videos").deleteOne(
    { _id: mongodb.ObjectID(mongoId) },
    function(error, status) {
      res.redirect("/myVideos");
    }
  );
};

exports.deletePost = deletePost;
