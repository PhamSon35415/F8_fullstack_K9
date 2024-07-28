// DOM css
var h1 = document.querySelector("h1");
h1.style.color = "red";
// h1.style.width = "100px";
var css = {
    color: "red",
    backgroundColor: "blue",
    width: "200px",
    height: "200px",
    // backgroundImage: "url(https://picsum.photos/200/300)",
    transform: "translateX(100px)",
};
Object.assign(h1.style, css);
// h1.style.color = null;
// BT thêm 2 thuộc tính sau
// background-image
//     transform: translateX();

var contentEl = document.querySelector(".content");
contentEl.style.transition = "0.3s all";
var fadeinEl = document.querySelector(".fade-in");
console.log(fadeinEl);
fadeinEl.addEventListener("click", function () {
    contentEl.style.display = "block";
    setTimeout(function () {
        contentEl.style.opacity = 1;
        contentEl.style.visibility = "visible";
    }, 10);
});

var fadeoutEl = document.querySelector(".fade-out");

fadeoutEl.addEventListener("click", function () {
    contentEl.style.opacity = 0;
    contentEl.style.visibility = "hidden";
    setTimeout(function () {
        contentEl.style.display = "none";
    }, 300);
});
