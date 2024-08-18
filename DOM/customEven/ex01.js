var slider1 = document.querySelector(".slider-1");
//tạo sự kiện khi người dùng kéo dc 100%
//sự kiện  dc gán vào input range có class là slider-1
// có 3 sự kiện
// tên sự kiện
// logic
// element

// var finishEvent = new Event("finish");
// finishEvent.msg = "Hoạc js không khó";
// slider1.addEventListener("mousedown", function (e) {
//     var range = Math.round((e.offsetX * 100) / this.clientWidth);
//     finishEvent.initialRange = range;
// });
// slider1.addEventListener("click", function () {
//     var value = slider1.value;
//     if (+value === 100) {
//         slider1.dispatchEvent(finishEvent);
//     }
// });
// slider1.addEventListener("finish", function (e) {
//     console.log("Hoàn thành 1");
//     console.log(e.initialRange);
// });
// slider1.addEventListener("finish", function () {
//     console.log("Hoàn thành 2");
// });

// var slider2 = document.querySelector(".slider-2");
// lắng nghe
slider1.addEventListener("finish", function (e) {
    console.log("logic1");
});
