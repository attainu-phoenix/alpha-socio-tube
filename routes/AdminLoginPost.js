"use strict";

var Admin = function(request, response) {
   var DB =request.app.locals.DB;

   var email = request.body.email;
    var password  = request.body.password;
   

   DB.collection("AdminLogin").findOne({email: email} ,function(error, data){
       console.log(data);
      if(error){
          console.log("invalid mail id");
          return response.render("AdminLogin.hbs");
      }
      else if(data.password == password){
          console.log("invalid password");
          return response.render("AdminLogin.hbs")
      }
      else {
          console.log(data);
          return response.render("AdminDashboard.hbs");
      }
   })
}

exports.Admin = Admin;
