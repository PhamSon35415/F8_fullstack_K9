// chọn được các elemet cha,con,anh em
/*
parentElement chọn thành phần cha gần nhất
children chọn thành phần con cấp 1 (trả về danh sách)
nextElementSibling chọn thành phần kế tiếp
previousElementSibling chọn thành phần phía trước


Giông trên nhưng sẽ lây tất cả các node ( cả các đấu xuống dòng và comment)
parentNode 
childNodes
NextSibling
previousSibling



firstChild
lastChild
firstElementChild
lastElementChild
*/

// var h2 = document.querySelector(".content h2");
// console.log(h2.parentElement);
// console.log(h2.children[0]);
// console.log(h2.nextElementSibling);
// console.log(h2.previousElementSibling);
// var firstEL = document.querySelector(".product h2");
// console.log(firstEL.nextElementSibling.nextElementSibling.outerHTML);
// var productEl = document.querySelector(".product");
// console.log(productEl.childNodes);
// console.log(productEl.nextSibling);

var ulEL = document.querySelectorAll("li>ul");
ulEL.forEach(function (value) {
    value.parentElement.classList.add("has-children");
    value.classList.add("bg");
    value.classList.add("hidden");
    value.parentElement.addEventListener("click", function () {
        value.parentElement.classList.toggle("active");
        var elementActive = document.querySelector(".show");
        if (elementActive && elementActive !== value) {
            elementActive.classList.remove("show");
            elementActive.parentElement.classList.toggle("active");
        }
        value.classList.toggle("show");
    });
});
