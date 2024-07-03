var password = "g3ggfD9fDcc@";
console.log(password.charAt(1).toLocaleUpperCase());
var x1 = true;
var x2 = false;
var x3 = false;
var x4 = false;
var x5 = false;
var x6 = 0;
var x7 = 0;
var x8 = 0;
if (password.length < 8) {
    x1 = false;
}
var sp = "!@#$%^&*()";
// thường
for (let i = 0; i < password.length; i++) {
    var check = password.charAt(i);
    if (check >= "a" && check <= "z") {
        x2 = true;
        x6++;
    }
    if (check >= "A" && check <= "Z") {
        x3 = true;
        x7++;
    }
    if (check >= "0" && check <= "9") {
        x4 = true;
        x8++;
    }
    if (sp.includes(check)) {
        x5 = true;
    }
}

console.log(x1, x2, x3, x4, x5);
if (x1 && x2 && x3 && x4 && x5 && x6 >= 2 && x7 >= 2 && x8 >= 2) {
    console.log("MK ok");
} else {
    console.log("Mk chưa đủ mạnh");
}
