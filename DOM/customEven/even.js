var inputRange = document.querySelectorAll('input[type="range"]');
var finishEvent = new Event("finish");
inputRange.forEach(function (item) {
    item.addEventListener("input", function () {
        if (+this.value === 100) {
            this.dispatchEvent(finishEvent);
        }
    });
});
var start = null;
var startTime = null;
var dragFast = new Event("dragFast");
inputRange.forEach(function (item) {
    var endTime;
    item.addEventListener("input", function () {
        if (!start) {
            start = +this.value;
        }
        if (this.value !== start && !start) {
            startTime = new Date().getTime();
        }
        if (+this.value === 100) {
            var cur = new Date().getTime();
            if (cur - startTime < 500) {
                this.dispatchEvent(dragFast);
            }
        }
    });
});
var slider1 = document.querySelector(".slider-1");
slider1.addEventListener("dragFast", function (e) {
    console.log("logic1");
});
