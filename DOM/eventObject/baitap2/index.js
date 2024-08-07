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
document.get;
carouselInnerEL.addEventListener("mousedown", function (e) {
    if (e.which !== 1) return;
    if (e.clientX === 0) return;
    test = true;
    x = e.clientX;
    carouselInnerEL.style.cursor = "all-scroll";
    carouselInnerEL.style.transition = "none";
    document.addEventListener("mousemove", function (e) {
        if (!test) return;

        var deltaX = e.clientX - x;
        var drag = deltaX / width;
        if (e.clientX === 0) return;
        console.log(e.clientX);
        if (imgIndex === 0 && drag > 0) {
            drag = 0;
        }
        if (imgIndex === items.length - 1 && drag < 0) {
            drag = 0;
        }
        carouselInnerEL.style.transform =
            "translateX(" + (-imgIndex * 100 + drag * 100) + "%)";
    });
    e.preventDefault();
});

document.addEventListener("mouseup", function (e) {
    if (!test) return;
    test = false;
    carouselInnerEL.style.transition = "transform 0.3s ease";
    var deltaX = e.clientX - x;
    var drag = deltaX / width;
    console.log(e.clientX);
    if (drag > 0.3) {
        goToIndex(imgIndex - 1);
    } else if (drag < -0.3) {
        goToIndex(imgIndex + 1);
    } else {
        goToIndex(imgIndex);
    }
});
