"use strict";
var mongodb = require("mongodb");

var acceptPost = function(req, res) {
  var mongoId = req.params.mongoId;
  var DB = req.app.locals.DB;

  DB.collection("videos").updateOne(
    { _id: mongodb.ObjectID(mongoId) }, // Filter an unique object
    { $set: { approved: true } }, // The new data to update
    function(error, data) {
      if (data) {
        res.redirect("/newRequests");
      }
    }
  );
};

exports.acceptPost = acceptPost;
