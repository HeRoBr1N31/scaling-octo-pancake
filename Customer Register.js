$(function() {
    $("#form").on("submit", function(event) {
        let pass = $("#password").val();
        let pass_conf = $("#password_conf").val();
        if (pass != pass_conf) {                        /*Validates the password confirmation*/
            event.preventDefault();
            alert("The passwords you have submitted are not the same. Please ensure they are.");
        }
        else {                                          /*Informs the user that they have created an account*/
            $("div").html("<p class='large'>Congratulations! you have successfully created an account.</p>");
        }
    })
}); 