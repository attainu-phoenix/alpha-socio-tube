'use strict';

var logout = function(request,response){
    request.session.data = null;

    response.redirect("/Admin");
}

exports.logout = logout;