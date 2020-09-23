function generate() {
    var password = "";
    var chars = "";
    var length = prompt("Password length:", "8-128");
    var lower = confirm("Use lowercase letters?");
    if (lower) {
        var chars = "abcdefghijklmnopqrstuvwxyz";
    }
    var upper = confirm("Use uppercase letters?");
    if (upper) {
        var chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    var numbers = confirm("Use numbers?");
    if (numbers) {
        chars = chars + "0123456789";
    }
    var special = confirm("Use special characters?");
    if (special) {
        chars = chars + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
    for (i = 0; i < length; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        password += chars.charAt(c);
        document.getElementById('password').value = password;
    }
}