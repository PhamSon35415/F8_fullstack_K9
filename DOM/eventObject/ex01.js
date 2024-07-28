var btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//     // console.log(e.clientX); //tính từ vị trí click đến viền cạnh phải của trình duyệt
//     // console.log(e.clientY); //tính từ vị trí click đến viền cạnh trên của trình duyệt
//     // console.log(e.offsetX); //tính từ vị trí click đến viền cạnh phải của phần tử
//     // console.log(e.offsetY); //tính từ vị trí click đến viền trên của phần tử

//     console.log(e.target);//trả về element click vào
//     console.log(this);
// });
// var btn = document.querySelector(".btn");
// var items = document.querySelectorAll(".content ul li");
var ulEl = document.querySelector(".content ul");
// items.forEach(function (item) {
//     item.addEventListener("click", function (e) {
//         this.style.color = "red";
//     });
// });

// btn.addEventListener("click", function () {
//     ulEl.innerHTML += `<li>item 4</li>`;
//     items = document.querySelectorAll(".content ul li");
//     items.forEach(function (item) {
//         item.addEventListener("click", function (e) {
//             this.style.color = "red";
//         });
//     });
// });
// console.log(ulEl.innerHTML);
ulEl.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        e.target.style.color = "red";
    }
});
btn.addEventListener("click", function () {
    ulEl.innerHTML += `<li>item 4</li>`;
});
var btn = document.querySelector(".btn");
var test;

var x = 0,
    y = 0;
btn.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
        test = true;
        document.addEventListener("mousemove", handleDrag);
        btn.style.cursor = "all-scroll";
        x = e.offsetX;
        y = e.offsetY;
    }
});

document.addEventListener("mouseup", function (e) {
    if (test) {
        document.removeEventListener("mousemove", handleDrag);
        test = false;
    }
});

function handleDrag(e) {
    btn.style.top = `${e.clientY - y}px`;
    btn.style.left = `${e.clientX - x}px`;
}
// var a = document.querySelector("a");
// a.addEventListener("click", function (e) {
//     e.preventDefault(); //ngăn chặn hành động của thẻ html
// });
// //
// var menu = document.querySelector(".menu");
// //contextmenu chuột phải hiện menu
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     menu.style.display = "block";
//     menu.style.top = `${e.clientY}px`;
//     menu.style.left = `${e.clientX}px`;
// });
// menu.addEventListener("click", function (e) {
//     e.stopPropagation(); //ngăn sự kiện nỗi bọt (nhấp vào thẻ con không tác dộng vào thẻ cha (cha và con phải cùng sự kiện))
//     if (e.target.nodeName === "LI") e.target.style.color = "red";
// });
// document.addEventListener("click", function () {
//     menu.style.display = "none";
// });
// document.addEventListener("keyup", function () {
//     if (e.key === "Escape") {
//         menu.style.display = "none";
//     }
// });
