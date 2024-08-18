var editor = document.querySelector(".editor");
var charCount = document.getElementById("char-count");
var wordCount = document.getElementById("word-count");
var btnBoldEl = document.querySelector(".btn-bold");
var btnUnderlineEl = document.querySelector(".btn-underline");
var btnItalicEl = document.querySelector(".btn-italic");
var btnColorEl = document.querySelector("#color-picker");
var btnFileEl = document.querySelector(".file-btn");
var optionEl = document.querySelector(".option-file");
var titleEl = document.querySelector("#doc-title");
optionEl.querySelectorAll("button").forEach(function (item) {
    item.addEventListener("click", function () {
        var file = item.dataset.file;
        console.log(file);
        if (file == "new") {
            editor.innerText = "";
            charCount.textContent = `Số ký tự: 0`;
            wordCount.textContent = `Số từ: 0`;
        }
        if (file == "text") {
            var dataUrl =
                "data:text/plain;charset=utf-8," +
                encodeURIComponent(editor.innerText);
            var a = document.createElement("a");
            a.href = dataUrl;
            a.download = `${titleEl.value}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        if (file == "pdf") {
            html2pdf(editor, {
                margin: 1,
                filename: titleEl.value,
            });
        }
        optionEl.classList.add("hidden");
    });
});
btnFileEl.addEventListener("click", function (e) {
    optionEl.classList.toggle("hidden");
    console.log(e.target);
});

editor.addEventListener("input", countText);
function countText() {
    charCount.textContent = `Số ký tự: ${editor.innerText.length}`;
    wordCount.textContent = `Số từ: ${
        editor.innerText.trim().split(" ").length
    }`;
}

function format(command) {
    document.execCommand(command, false, null);
}

function setColor() {
    var color = document.getElementById("color-picker").value;
    document.execCommand("foreColor", false, color);
}
btnBoldEl.addEventListener("click", function () {
    format("bold");
});
btnUnderlineEl.addEventListener("click", function () {
    format("underline");
});
btnItalicEl.addEventListener("click", function () {
    format("italic");
});
btnColorEl.addEventListener("change", function () {
    setColor();
});
