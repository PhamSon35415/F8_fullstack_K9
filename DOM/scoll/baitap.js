var contentEl = document.querySelectorAll(".section");
var btnEl = document.querySelectorAll(".btn");
var arr = [];
btnEl[0].classList.add("active");
contentEl.forEach(function (value) {
    var ob = {
        id: value.dataset.index,
        min: value.offsetTop - 50,
        max: value.offsetTop - 50 + value.clientHeight * 0.5,
    };
    arr.push(ob);
    btnEl[value.dataset.index].addEventListener("click", function () {
        window.scroll({ top: value.offsetTop - 50, behavior: "smooth" });
        if (value.offsetTop)
            btnEl.forEach(function (item) {
                item.classList.remove("active");
            });
        btnEl[value.dataset.index].classList.add("active");
    });
});
window.addEventListener("scroll", function () {
    arr.forEach(function (item) {
        if (window.scrollY >= item.min && window.scrollY <= item.max) {
            btnEl.forEach(function (item2) {
                item2.classList.remove("active");
            });
            btnEl[item.id].classList.add("active");
        }
    });
});
//cach 2
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (item) {
        if (item.isIntersecting) {
            var targer = item.dataset.index;
            btnEl.forEach(function (item2) {
                item2.classList.remove("active");
            });
            btnEl[item.id].classList.add("active");
        }
    });
    {
        threshold: 0.5;
    }
});
contentEl.forEach(function (item) {
    observer.observe(item);
});
