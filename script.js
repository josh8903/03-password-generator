function generate() {
    var password = "";
    var chars = "";
    // password length selection
    var length = prompt("Password length:", "8-128");
    // selection validation - run alert if selection < 8, or > 128, or not a number
    if (length < 8 || length > 128 || isNaN(length)) {
        alert("You must enter a number between 8-128");
        generate();
        // character type selection, run if a number 8-128 has been entered
    } else {
        var lower = confirm("Use lowercase letters?");
        // run if use lowercase = true
        if (lower) {
            chars = "abcdefghijklmnopqrstuvwxyz";
        }
        var upper = confirm("Use uppercase letters?");
        // run if use uppercase = true
        if (upper) {
            chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        var numbers = confirm("Use numbers?");
        // run if use numbers = true
        if (numbers) {
            chars = chars + "0123456789";
        }
        var special = confirm("Use special characters?");
        // run if use special = true
        if (special) {
            chars = chars + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        // slection validation - run if at least one selection = true
        if (lower || upper || numbers || special) {
            // password generator
            for (i = 0; i < length; i++) {
                var c = Math.floor(Math.random() * chars.length + 1);
                password += chars.charAt(c);
                document.getElementById('password').value = password;
            }
            // run alert if none selected
        } else {
            alert("You must select atleast one of the options.");
            generate();
        }
    }
}