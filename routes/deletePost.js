'use strict'

var mongodb = require("mongodb");

var deletePost=function(req, response){
    var DB=req.app.locals.DB

    var mongoId = req.params.mongoId;
    
    DB.collection("videos").deleteOne(
        {_id: mongodb.ObjectID(mongoId)},
        function(error, status) {
            response.json({deleted: true});
    });
};

exports.deletePost=deletePost;
