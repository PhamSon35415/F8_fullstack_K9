var list = document.querySelector(".list");
var listItem = document.querySelectorAll(".item");
function updateIndex() {
    var module = 1;
    var bai = 1;
    listItem.forEach(function (value) {
        if (value.classList.contains("module")) {
            value.innerHTML = `Module ${module}: ${
                value.querySelector("span").outerHTML
            }`;
            module++;
        } else {
            value.innerHTML = `Bài ${bai}: ${
                value.querySelector("span").outerHTML
            }`;
            bai++;
        }
    });
}
updateIndex();
var item;
