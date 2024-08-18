// var btn = document.querySelector(".btn");
// var colorList = ["red", "blue", "green", "yellow"];
// var colorIndex = 0;
// btn.addEventListener("click", function () {
//     var color = colorList[colorIndex];
//     colorIndex++;
//     if (colorIndex >= colorList.length) {
//         colorIndex = 0;
//     }
//     document.body.style.backgroundColor = color;
// });
// setInterval(function () {
//     btn.click();
// }, 1000);

var quantityEl = document.querySelector(".quantity");
var inputEl = quantityEl.querySelector("input");
var minusEL = quantityEl.querySelector(".minus-btn");
var plusEL = quantityEl.querySelector(".plus-btn");
var changeEven = new Event("change");
HTMLElement.prototype.change = function () {
    var quantity = parseInt(this.value);
    console.log(quantity);
};
inputEl.addEventListener("change", function () {
    var quantity = parseInt(this.value);
    console.log(quantity);
});

plusEL.addEventListener("click", function () {
    inputEl.value++;
    inputEl.change();
});
minusEL.addEventListener("click", function () {
    if (inputEl.value > 1) {
        inputEl.value--;
    }
    inputEl.change();
});
