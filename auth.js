function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkAuth() {
    var authenticated = getCookie("authenticated");
    if (authenticated == "") {
        document.getElementById("protected-content").style.display = "none";
    }
    else {
        document.getElementById("authentication-form").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    }
}

function authenticate(event) {
    event.preventDefault();
    var password = document.getElementById("password-input").value;
    if (password == "verySafePassword") {
        setCookie("authenticated", true, 1);
        document.getElementById("authentication-form").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    }
    else {
        alert("Incorrect password. Please try again.");
    }
}

window.onload = function () {
    checkAuth();
};
