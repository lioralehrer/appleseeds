$(document).ready(function () {
    //adding event listeners
    $('#createUserSubmit').bind('click', checkIfUserExists);
    $('#getUserSubmit').bind('click', showExistingUsers);
})
let checkIfUserExists = function () {
    var owner = $('#owner').val();
    var userName = $('#username').val();
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "https://itc-colors.appspot.com/add_user",
        data: {
            owner: owner,
            userName: userName
        },
        success: function (responsemsg) {
            if (responsemsg.msg) {
                for (var i = 0; i < users.length; i++) {
                    //if we found the user, return true and print a message to the user
                    if (users[i] === userName.val()) {
                        $('.msg').text("User already exists");
                        return true;
                    }
                    $(".msg").append(responsemsg.msg);
                }

            }
            // error: function () {
            //     alert("Request failed with message : " + msg);
            // }
        }
    });
};
let showExistingUsers = function () {
    $.ajax({
        type: "GET",
        url: "https://itc-colors.appspot.com/users",
        data: {
            owner: $('#owner').val()
        },
        dataType: "json",
        success: function (responsemsg) {
            console.log(responsemsg)
           
        },
        error: function (msg) {
            console.log("error");
        },
    });
};


  // users = []; //internal array of users
    // //Method that checks if the user exists in the internal array
    // checkIfUserExists = function () {
    //     var userName = $('#username');
    //     for (var i = 0; i < users.length; i++) {
    //         //if we found the user, return true and print a message to the user
    //         if (users[i] === userName.val()) {
    //             $('.msg').text("User already exists");
    //             return true;
    //         }
    //     }
    //     //if we haven't found the user, return false
    //     $('.msg').text("user created successfully");
    //     users.push(userName.val());
    //     return false;
    // };
    // showExistingUsers = function () {
    //     $('.msg').text(users);
    //     return users
    // };
