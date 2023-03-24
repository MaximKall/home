function authenticate() {
    var password = document.getElementById("password-input").value;
    if (password == "mypassword") {
        setCookie("authenticated", true, 1);
        window.location.href = "protected.html";
    }
    else {
        alert("Incorrect password. Please try again.");
    }
}

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

function checkCookie() {
    var authenticated = getCookie("authenticated");
    if (authenticated != "") {
        window.location.href = "protected.html";
    }
}

function checkAuth() {
    var authenticated = getCookie("authenticated");
    if (authenticated == "") {
        window.location.href = "authentication.html";
    }
    else {
        document.getElementById("protected-content").style.display = "block";
    }
}
