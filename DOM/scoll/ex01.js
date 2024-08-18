// var test = 0;
// window.addEventListener("scroll", function () {
//     console.log("ok");
//     console.log(window.scrollY);
//     console.log(window.scrollX);
//     if (window.scrollY > test) {
//         document.querySelector("body").style.backgroundColor = "red";
//     } else {
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     test = window.scrollY;
// });
//window.scrollY: lấy vị trí scroll so với trục Y
//window.scrollX: lấy vị trí scroll so với trục X
// window.scroll ({ top:0;left:0; behavior: "smooth" //chuyển thanh cuộn tới vị trí đã thiết lập
// })
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" }); //chuyển thanh
});
window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 150) {
        btn.style.display = "inline";
    } else {
        btn.style.display = "none";
    }
});
