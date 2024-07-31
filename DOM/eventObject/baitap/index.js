var inputEl = document.querySelector(".input-content");
var btnsubmitEl = document.querySelector(".btn-submit");
var fullitemEL = document.querySelector(".full-item");
console.log([fullitemEL]);
btnsubmitEl.addEventListener("click", function (e) {
    if (inputEl.value !== "" && inputEl.value !== null) {
        if (fullitemEL.innerText === "Hết rồi !") {
            fullitemEL.innerHTML = "";
        }
        fullitemEL.innerHTML += `
        <div class="item">
            <p>${inputEl.value}</p>
            <div class="btn-icon">
                <i class="btn btn-update fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash btn btn-delete " style="color: #ffffff;"></i>
            </div>
        </div>`;
        inputEl.value = "";
        addItemEvent();
    }
});
function addItemEvent() {
    document.querySelectorAll(".item").forEach(function (el) {
        el.addEventListener("click", function (e) {
            if (e.target.className.includes("btn-delete")) {
                el.remove();
                if (fullitemEL.innerText.trim() == "") {
                    fullitemEL.innerHTML = `<h2 style="color:#fff">Hết rồi !</h2>`;
                }
            } else if (e.target.className.includes("btn-update")) {
                const vl = el.querySelector("p").innerText.trim();

                el.outerHTML = `
                <form class="form-container" onsubmit="return false;">
                    <input type="text" class="input-content" value="${vl}">
                    <button type="submit" class="btn-submit">
                        Add Task
                    </button>
                </form>`;

                var newItem = document.querySelectorAll(
                    ".full-item .form-container"
                );
                console.log(newItem[0].innerHTML);

                newItem.forEach(function (ite) {
                    console.log(ite.querySelector(".btn-submit"));
                    ite.querySelector(".btn-submit").addEventListener(
                        "click",
                        function () {
                            const newValue =
                                ite.querySelector(".input-content").value;
                            ite.outerHTML = `
                    <div class="item">
                        <p>${newValue}</p>
                        <div class="btn-icon">
                            <i class="btn btn-update fa-solid fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash btn btn-delete " style="color: #ffffff;"></i>
                        </div>
                    </div>`;
                            addItemEvent();
                        }
                    );
                });
            }
        });
    });
}
addItemEvent();
