$(function() {
    $("form").on("submit", function(event) {
        let pass = $("#password").val();
        let user = $("#username").val();
        if (user == "jsmith001" && pass == "password1") {
            window.location.replace = "Customer Site.html"; 
        }
        else {
            alert("Your username or password is incorrect");
        }
    })
});