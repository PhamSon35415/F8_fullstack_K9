var btnEl = document.querySelector(".btn");
var fullTime = 10;
var timeRemaining = fullTime * 1000;
var endTime;
var test = false;
var frameId;
function updateCountdown() {
    if (!test) return;
    var now = new Date().getTime();
    var timeLeft = endTime - now;
    timeRemaining = timeLeft;
    var time = Math.ceil(timeLeft / 1000);
    if (time <= 0) {
        document.querySelector(".count").innerText = "0";
        fullTime = 0;
        test = false;
        btnEl.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://fullstack.edu.vn";
        });
        btnEl.removeAttribute("disabled");
    } else {
        document.querySelector(".count").innerText = time;
        frameId = requestAnimationFrame(updateCountdown);
    }
}
function startCountdown() {
    endTime = new Date().getTime() + timeRemaining;
    test = true;
    frameId = requestAnimationFrame(updateCountdown);
}
function stopCountdown() {
    test = false;
    if (frameId) {
        cancelAnimationFrame(frameId);
    }
}
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        stopCountdown();
    } else if (document.visibilityState === "visible" && timeRemaining > 0) {
        startCountdown();
    }
});
startCountdown();

// var fullTime = 10;
// var intervalID;
// var test = false;
// var btnEl = document.querySelector(".btn");
// btnEl.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.location.href = "https://fullstack.edu.vn";
// });
// function startCounter() {
//     intervalID = setInterval(function () {
//         document.querySelector(".count").innerHTML = fullTime;
//         fullTime--;
//         if (fullTime < 0) {
//             clearInterval(intervalID);
//             btnEl.removeAttribute("disabled");
//         }
//     }, 1000);
//     test = true;
// }
// function pauseCounter() {
//     clearInterval(intervalID);
//     test = false;
// }
// startCounter();
// document.addEventListener("visibilitychange", function () {
//     if (document.visibilityState === "hidden") {
//         if (fullTime > 0) {
//             pauseCounter();
//         }
//     } else if (document.visibilityState === "visible" && !test) {
//         if (fullTime > 0) {
//             startCounter();
//         }
//     }
// });
