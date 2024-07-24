var titleEl = document.querySelector("title");
console.log(titleEl.classList);
// add thêm class cho element
titleEl.classList.add("title-1", "title-2");

// remove() => xóa class khỏi element
titleEl.classList.remove("title-2");

// replace() => thay thế class cũ thành class mới
titleEl.classList.replace("title-1", "title-4");

// toggle() => thêm class nếu chưa tồn tại xóa nếu class tồn tại
titleEl.classList.toggle("title-10");
titleEl.classList.toggle("title-10");

// contains => kiểm tra xem có tồn tại hay không
console.log(titleEl.classList.contains("title-4"));

var btnThemeEl = document.querySelector(".switch-theme");
var bodyEl = document.body;
btnThemeEl.onclick = function () {
    bodyEl.classList.toggle("dark");
    if (bodyEl.classList.contains("dark")) {
        btnThemeEl.innerText = "Light";
    } else {
        btnThemeEl.innerText = "Dark";
    }
};
var items = document.querySelectorAll("li");
items.forEach(function (itemEL) {
    itemEL.addEventListener("click", function () {
        this.classList.toggle("active");
    });
});
var btnClearEl = document.querySelector(".clear");
btnClearEl.addEventListener("click", function () {
    items.forEach(function (itemEL) {
        itemEL.classList.remove("active");
    });
});
