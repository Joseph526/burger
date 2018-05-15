$(document).ready(function() {
    $("#btnSubmit").on("click", function(event) {
        event.preventDefault();

        // Capture user input
        var newBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.post("/api/burgers", newBurger)
            .then(function() {
                location.reload();
            });
    });
});