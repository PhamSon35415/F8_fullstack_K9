var display = function (callback, ...args) {
    console.log("Display");
    if (typeof callback) {
        callback(...args);
    }
};

// var showInfo = function () {
//     console.log("Show Info");
// };
// var showInfo2 = function () {
//     console.log("Show Info2");
// };
// display(showInfo);
// display(showInfo2);
// display(function () {
//     console.log("ok");
// });
var showInfo = function (text, x) {
    console.log("Show Info", text, x);
};
// display(function () {
// showInfo("text");
// });
// display(showInfo, "text", "a");

// setTimeout ==> Thực thi 1 hàm khác trong 1 khoảng thời gian chỉ đinh
// setTimeout(
//     function (a, b) {
//         console.log("Học lập trình", a, b);
//     },
//     2000,
//     "ok",
//     "okla2"
// );
// setInterval==> thực thi gọi lại 1 hàm sau 1 khoảng thời gian
// var count = 0;
// var id = setInterval(function () {
//     console.log("Okla", ++count);
//     clearInterval(id);
// }, 1000);
// setTimeout(function () {
//     console.log("ol");
// }, 0);

var getA = function (callback, ...args) {
    setTimeout(function () {
        console.log("GetA");
        if (typeof callback === "function") {
            callback(...args);
        }
    }, 1000);
};
var getB = function (callback, ...args) {
    setTimeout(function () {
        console.log("GetB");
        if (typeof callback === "function") {
            callback(...args);
        }
    }, 500);
};
var getC = function (callback, ...args) {
    setTimeout(function () {
        console.log("GetC");
        if (typeof callback === "function") {
            callback(...args);
        }
    }, 1500);
};
// getA(getB, function () {
//     getC(function () {
//         console.log("ok");
//     });
// });
getC(getB, getA);
// IIFE
// HÀm con
// Closure
// Thunk function
// đệ Quy
