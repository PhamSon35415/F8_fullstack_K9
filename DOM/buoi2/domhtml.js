// var contentEl = document.querySelector(".content");
// // 1. innerHTML :lấy tất cả các phần tử bên trong
// // console.log(contenEl.innerHTML);
// // console.log((contenEl.innerHTML = "<h1>Học lap trình </h1>"));

// // innnerText :trả về text nhưng bỏ khoảng trắng
// // console.log(contenEl.innerText);
// // console.log((contenEl.innerText = "<h1>Học lap trình </h1>"));

// // textContent :trả vè text nhưng giữ nguyên khoảng trắng
// // console.log(contenEl.textContent);
// // console.log(contenEl.textContent=`<h1> Học lập trình</h1>`);

// // outerHTML: lấy tất  cả các phần tử bên trong và lấy cả nó
// // console.log(contenEl.outerHTML);
// // console.log((contenEl.outerHTML = "<h1>Okla</h1>"));

// var btnEl = document.querySelector(".btn");
// var content = contentEl.innerHTML;
// btnEl.onclick = function () {
//     if (contentEl.innerHTML) {
//         contentEl.innerHTML = "";
//         btnEl.innerText = "Hiện";
//     } else {
//         contentEl.innerHTML = content;
//         btnEl.innerText = "Ẩn";
//     }
// };
// var minusEl = document.querySelector(".minus-btn");
// var plusEl = document.querySelector(".plus-btn");
// var numberEl = document.querySelector(".number");
// console.log(numberEl);
// minusEl.onclick = function () {
//     if (+numberEl.innerText > 0) {
//         numberEl.innerText--;
//     }
// };
// plusEl.onclick = function () {
//     numberEl.innerText++;
// };
//
// attribute
// TH1 áp dụng với các thuộc tính hợp lệ
// cú pháp element.tên thuộc tính

//  th2 Áp dụng với các thuộc tính tự tạo
//  getAttribute(Tên thuocjo tính)
//  setAttribute(tên thuộc tính , gtri)
var linkEL = document.querySelector(".link");
// console.log(linkEL.target);
// console.log(linkEL.title);
// console.log(linkEL.className);
// console.log(linkEL.href);
// console.log(linkEL.id);
linkEL.href = "okl";

linkEL.className = "linktext";
linkEL.style = "color:red;";
console.log(linkEL.getAttribute("v-name"));
linkEL.setAttribute("v-name", "Pk");

// data attribute datatên="gtri"
console.log(linkEL.dataset.vName);

// giả sử data-animation-duration
linkEL.dataset.animationDuration = "1s";

// xóa data attribute
delete linkEL.dataset.vName;

// Xóa các thuộc tính
linkEL.removeAttribute("target");

// xóa thẻ html
linkEL.remove();

// var webEl = document.querySelector(".website");
// webEl.addEventListener("change", function () {
//     var value = this.value;
//     if (value) {
//         window.open(value);
//     }
// });
