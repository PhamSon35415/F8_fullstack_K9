var overlayEL = document.querySelector(".overlay");
document.querySelector(".dangnhap.btn").addEventListener("click", function () {
    overlayEL.classList.add("overlay-ht");
    document.querySelector(".container").classList.add("overlay-ht");
});
overlayEL.addEventListener("click", function () {
    overlayEL.classList.remove("overlay-ht");
    document.querySelector(".container").classList.remove("overlay-ht");
});

var btnloginEl = document.querySelector(".btn-login");
var btnsignupEl = document.querySelector(".btn-signup");
btnloginEl.classList.add("btn-active");

var signupEl = document.querySelector(".form-signup");
var containerEl = document.querySelector(".container-login"); //login
signupEl.classList.add("hidden");
btnloginEl.addEventListener("click", function () {
    btnsignupEl.classList.remove("btn-active");
    btnloginEl.classList.add("btn-active");
    signupEl.classList.add("hidden");
    containerEl.classList.remove("hidden");
});
btnsignupEl.addEventListener("click", function () {
    btnloginEl.classList.remove("btn-active");
    btnsignupEl.classList.add("btn-active");
    containerEl.classList.add("hidden");
    signupEl.classList.remove("hidden");
});

var emailEl = document.querySelector("#login-email");
var passEl = document.querySelector("#login-password");
var fullnameEl = document.querySelector("#login-fullname");
var erron1El = document.querySelector(".login-false");
var btnsaveEl = document.querySelector(".full-form");
var email = "phamson@gmail.com";
var pass = "123456";
btnsaveEl.onsubmit = function () {
    var isValid = true;
    if (emailEl.value !== email || passEl.value !== pass) {
        erron1El.innerHTML = "Sai tài khoản hoặc mật khẩu";
        isValid = false;
    } else {
        erron1El.innerHTML = "";
    }
    validateForm();
    return isValid;
};
emailEl.addEventListener("keyup", function () {
    validateForm();
});
passEl.addEventListener("keyup", function () {
    validateForm();
});
function validateForm() {
    var isValid = true;
    var erEmail = document.querySelector(".emailError");
    var pasEmail = document.querySelector(".passError");

    erEmail.innerHTML = "";
    pasEmail.innerHTML = "";
    console.log(emailEl.value);
    console.log(passEl.value);
    if (emailEl.value === "") {
        erEmail.innerHTML = "Email không được để trống";
        isValid = false;
    }
    if (passEl.value === "") {
        pasEmail.innerHTML = "Password không được để trống";
        isValid = false;
    }

    return isValid;
}
var email1El = document.querySelector("#singup-email");
var pass1El = document.querySelector("#singup-password");
var fullnameEl = document.querySelector("#singup-fullname");
console.log(email1El);
email1El.addEventListener("keyup", function () {
    validateForm2();
});
pass1El.addEventListener("keyup", function () {
    validateForm2();
});
fullnameEl.addEventListener("keyup", function () {
    validateForm2();
});
function validateForm2() {
    var isValid = true;
    var fullnameEL = document.querySelector(".form-signup .fullnameError");
    var signupEmail = document.querySelector(".form-signup .emailError");
    var signupPass = document.querySelector(".form-signup .passError");

    fullnameEL.innerHTML = "";
    signupEmail.innerHTML = "";
    signupPass.innerHTML = "";

    if (fullnameEl.value === "") {
        fullnameEL.innerHTML = "Họ và tên không được để trống";
        isValid = false;
    }
    if (email1El.value === "") {
        signupEmail.innerHTML = "Email không được để trống";
        isValid = false;
    }
    if (pass1El.value === "") {
        signupPass.innerHTML = "Password không được để trống";
        isValid = false;
    }

    return isValid;
}
