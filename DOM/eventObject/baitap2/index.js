var carouselInnerEL = document.querySelector(".carousel .carousel-inner");
var nextbnt = document.querySelector(".carousel .carousel-nav .next");
var prevbnt = document.querySelector(".carousel .carousel-nav .prev");
var items = document.querySelectorAll(".carousel .carousel-inner .item");
var dotsContainer = document.querySelector(".carousel .carousel-dots");
var width = carouselInnerEL.clientWidth;
var position = 0;
var maxWidth = width * items.length;
var test = false;
var x = 0;
var imgIndex = 0;

for (var i = 0; i < items.length; i++) {
    var dot = document.createElement("span");
    if (i === 0) {
        dot.classList.add("active");
    }
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
}

function goToIndex(index) {
    if (index < 0 || index >= items.length) return;
    position = -width * index;
    carouselInnerEL.style.transform = "translateX(" + position + "px)";
    imgIndex = index;
    var dots = dotsContainer.querySelectorAll("span");
    dots.forEach(function (dot) {
        return dot.classList.remove("active");
    });
    dots[imgIndex].classList.add("active");
}
nextbnt.addEventListener("click", function () {
    if (imgIndex + 1 < items.length) {
        goToIndex(imgIndex + 1);
    }
});
prevbnt.addEventListener("click", function () {
    if (imgIndex - 1 >= 0) {
        goToIndex(imgIndex - 1);
    }
});
dotsContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        var index = parseInt(e.target.dataset.index);
        goToIndex(index);
    }
});
