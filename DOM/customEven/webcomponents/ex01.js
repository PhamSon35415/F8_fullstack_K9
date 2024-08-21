// var box = document.querySelector(".box");
// var shadowRoot = box.attachShadow({ mode: "open" });
// var h1 = document.querySelector("h1");

// // theem content
// shadowRoot.innerHTML = "<h1>Shadow DOM</h1>";
// var style = document.createElement("style");
// style.textContent = "h1{color:red;}";
// shadowRoot.append(style);
// box.shadowRoot.querySelector("h1").textContent = "okl";

class todoApp extends HTMLElement {
    static observedAttributes = ["theme"];
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.render();
        this.addStyle();
        this.setAttribute("theme", "light");
        this.theme();
    }
    addStyle() {
        var style = document.createElement("style");
        style.textContent = `
            .todo-app{
            border:1px solid red;
            padding:15px;
            }
            .todo-app .theme{
                float:right;
            }
            .todo-app .theme .active{
                color:red;
            }

        `;
        this.shadowRoot.append(style);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        var style = document.createElement("style");

        if (name === "theme" && newValue === "dark") {
            style.textContent = `.todo-app{
                color:#fff;
                background-color:black;
                }`;
        } else {
            style.textContent = `.todo-app{
                color:black;
                background-color:#fff;
                }`;
        }
        this.shadowRoot.append(style);
    }
    theme() {
        var _this = this;
        console.log(this.shadowRoot.querySelector(".light"));
        this.shadowRoot
            .querySelector(".light")
            .addEventListener("click", function () {
                _this.setAttribute("theme", "light");
                this.classList.add("active");
                this.shadowRoot;
                this.classList.add("active");
                _this.shadowRoot
                    .querySelector(".dark")
                    .classList.remove("active");
            });
        this.shadowRoot
            .querySelector(".dark")
            .addEventListener("click", function () {
                _this.setAttribute("theme", "dark");
                this.classList.add("active");
                _this.shadowRoot
                    .querySelector(".light")
                    .classList.remove("active");
            });
        var list = this.shadowRoot.querySelector(".list");
        var addEl = this.shadowRoot.querySelector(".add");
        var inputEl = this.shadowRoot.querySelector(".input_value");
        addEl.addEventListener("click", function () {
            var item = document.createElement("li");
            if (inputEl.value.trim()) {
                item.textContent = inputEl.value;
                list.append(item);
                inputEl.value = "";
            }
        });
    }
    render() {
        var template = `<div class="todo-app">
            <h1>Todo App</h1>
            <div class="theme">
                <button class="light"> Light</button>
                <button class="dark"> Dark</button>
            </div>
            <ul class="list">
                <li>job 1</li>
                <li>job 2</li>
                <li>job 3</li>
                <li>job 4</li>
                <li>job 5</li>
            </ul>
            <input type="text" class="input_value">
            <button class="add"> Add</button>
        </div>`;
        this.shadowRoot.innerHTML = template;
    }
}
customElements.define("todo-app", todoApp);
