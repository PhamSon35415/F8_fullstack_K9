// var root = document.querySelector("#root");
// var h1 = document.createElement("h1");
// h1.innerText = "Count : ";
// var btn = document.createElement("button");
// btn.innerText = "Click me";
// root.append(h1);
// // var span = document.createElement("span");
// // span.innerText = "0";
// var textNode = document.createTextNode(0);
// h1.append(textNode);
// // h1.append(span);
// root.append(btn);
// btn.addEventListener("click", function () {
//     // span.innerText++;
//     textNode.data++;
//     comment.data = "Tăng rồi !";
// });
//brute-force

//web shell
// commentNode
// var comment = document.createComment("Comment");
// root.append(comment);
// var form = document.querySelector("form");
// var todoList = document.querySelector(".todo-list");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     var input = this.querySelector("input");
//     var value = input.value;
//     if (value) {
//         var p = document.createElement("p");
//         p.innerText = value;
//         todoList.append(p);
//         input.value = "";
//     }
// });

//DomContentLoaded khi cây dom đươc tải
//load chờ cây dom tải xong
// var h1 = document.querySelector("h1");
// document.addEventListener("DOMContentLoaded", function () {

//     console.log(h1);
// });
var img = document.querySelector("img");
var shadow = document.querySelector(".shadow");
window.addEventListener("load", function () {
    shadow.classList.add("hidden");
    console.log(img.width);
});
window.addEventListener("DOMContentLoaded", function () {
    console.log(img.width);
});
console.log(+"2");
