"use strict";

var mongodb = require("mongodb");

var deletePost = function(req, res) {
  var DB = req.app.locals.DB;

  var mongoId = req.params.mongoId;

  if (req.session.user) {
    DB.collection("videos").deleteOne(
      { _id: mongodb.ObjectID(mongoId) },
      function(error, status) {
        return res.redirect("/myVideos");
      }
    );
  }

  if (req.session.admin) {
    DB.collection("videos").deleteOne(
      { _id: mongodb.ObjectID(mongoId) },
      function(error, status) {
        res.redirect("/newRequests");
      }
    );
  }
};

exports.deletePost = deletePost;
