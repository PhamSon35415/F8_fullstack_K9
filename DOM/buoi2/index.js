// Even Hành dộng từ phía người dùng tác động lên các thẻ Html
// các thẻ  html có sẵn các

// trong các even handler sẽ luôn có 1 tham số gọi là even object (mô tả thông tin even)
var btnEl = document.querySelector(".btn");
// btnEl.onclick = function (e) {
//     console.log("Ok la");
//     console.log(e);
// };
// even listener

// btnEl.addEventListener("click", function (e) {
//     console.log("Ok la");
// });
// btnEl.addEventListener("click", function (e) {
//     console.log("Ok la 2");
// });
var count = 0;
var handlerClick = function () {
    console.log("count:", ++count);
    if (count === 5) {
        btnEl.removeEventListener("click", handlerClick);
    }
};
btnEl.addEventListener("click", handlerClick);

// .addEventListener
//.removeEventListener
