'use script'
var button1 = document.getElementById("button1");
button1.addEventListener("click",function(){
    console.log("Entered");
    var confirmationByUser = confirm("This can't be undone.\n\n Are u Sure?");
    if(!confirmationByUser){
        return;
    }

    var mongoId = document.getElementById("mongoId").value;
    console.log(mongoId);

    var request = new XMLHttpRequest();
    request.open("post", "/delete/" + mongoId);
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState == 4 && request.status == 200) {
            window.location.href = "/myVideos";
        }
    };
});
