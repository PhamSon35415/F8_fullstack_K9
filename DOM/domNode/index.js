var root = document.querySelector(".root");
// tạo element
var h1 = document.createElement("h1");
h1.innerText = "Học js không khó ";
h1.id = "title";
h1.className = "title";
console.log(h1);
// thêm phần tử dẩy xuống cuối
root.append(h1);

// copy node cũ thành 1 node mới để tái sử dụng
var h1 = h1.cloneNode("h1");

root.append(h1);

var h1 = document.createElement("h2");
h1.innerText = "Học js quá khó";
h1.id = "title";
// thêm phần tử dẩy lên đầu
root.prepend(h1);

var btn = document.createElement("button");
btn.innerText = "Click";
root.append(btn);

var btn2 = document.createElement("button");
btn2.innerText = "Add";

var ul = document.createElement("ul");
ul.className = "menu";
root.append(ul);
var count = 0;
for (var i = 1; i <= 4; i++) {
    count++;
    var li = document.createElement("li");
    li.innerText = `Item ${count}`;
    ul.append(li);
    li.addEventListener("click", function () {
        removeIt(this);
    });
}
btn2.addEventListener("click", function () {
    var li = document.createElement("li");
    li.innerText = `Item ${++count}`;
    ul.append(li);
    li.addEventListener("click", function () {
        removeIt(this);
    });
});

// root.append(btn2);
var removeIt = function (el) {
    el.remove();
};
// insertBefore :chèn element vào trước 1 phần tử nào dó
var h3 = document.createElement("h3");
h3.innerText = "Insert Before";
// root.insertBefore(h3, ul);
var nexUl = ul.nextElementSibling;
if (nexUl) {
    root.insertBefore(h3, nexUl);
} else {
    root.append(h3);
}

// replaceChild thay thế khi thay thể thì element cũ sẽ được thả ra và sau đó ta có thể thao tác tiếp vói element bị thay thế mà không câng tạo lại element mới
var p = document.createElement("p");
root.replaceChild(p, h1);
//removeChild xóa khi sau khi xóa thì element cũ sẽ được thả ra và sau đó ta có thể thao tác tiếp vói element bị xóa mà không câng tạo lại element mới
root.removeChild(ul);
