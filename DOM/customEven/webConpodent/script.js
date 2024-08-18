// console.log(HTMLElement);
//
class hello extends HTMLElement {
    static observedAttributes = ["data-type"];
    // khởi tạo
    constructor() {
        super();
        console.log("Hello");
    }
    connectedCallback() {
        var _this = this;
        console.log("connectedCallback");
        this.innerHTML = "Count: <span>0</span> <button>+</button>";
        var btn = this.querySelector("button");
        var span = this.querySelector("span");
        btn.addEventListener("click", function () {
            span.innerText++;
            if (span.innerText == 10)
                _this.setAttribute("data-type", "success");
        });
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }
    disconnectedCallback() {
        console.log("disconnectedCallback");
    }
}
customElements.define("xin-chao", hello);
var btnEl = document.querySelector(".btn");
var helloWord = document.createElement("xin-chao");
var isShow = false;
btnEl.addEventListener("click", function () {
    if (!isShow) {
        document.body.append(helloWord);
        isShow = true;
    } else {
        helloWord.remove();
        isShow = false;
    }
});
