function generate() {
    var password = "";
    var chars = "";
    var length = prompt("Password length:", "8-128");
    if (length < 8 || length > 128 || isNaN(length)) {
        alert("You must enter a number between 8-128");
        generate();
    } else {
        var lower = confirm("Use lowercase letters?");
        if (lower) {
            chars = "abcdefghijklmnopqrstuvwxyz";
        }
        var upper = confirm("Use uppercase letters?");
        if (upper) {
            chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        var numbers = confirm("Use numbers?");
        if (numbers) {
            chars = chars + "0123456789";
        }
        var special = confirm("Use special characters?");
        if (special) {
            chars = chars + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        if (lower || upper || numbers || special) {
            for (i = 0; i < length; i++) {
                var c = Math.floor(Math.random() * chars.length + 1);
                password += chars.charAt(c);
                document.getElementById('password').value = password;
            }
        } else {
            alert("You must select atleast one of the options.");
            generate();
        }
    }
}