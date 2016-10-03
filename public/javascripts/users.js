$(document).ready(function () {
    $('#user-submit').click(function () {
        var payload = {
            name: $('#user-name').val(),
            email: $('#user-email').val(),
            age: $('#user-age').val()
        };
        console.log("payload name: " + payload.name);
        console.log("payload email: " + payload.email);
        console.log("payload age: " + payload.age);
        $.ajax({
            url: "/users",
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            success: function(result){
                 $(".table").append("<tr><td>"+payload.name+"</td><td>"+payload.email+"</td><td>"+payload.age+"</td></tr>");
            }
        });
    });
});
    