import Navigo from "navigo";
import loginUI, { checkMethod } from "./src/pages/login.js";
import registerUI, { postMethod } from "./src/pages/register.js";
import HomeUI from "./src/pages/home.js";
const render = (position, content) => {
    position.innerHTML = content();
};

const appRoot = document.getElementById("app");
const router = new Navigo("/");

router.on("/", () => {
    render(appRoot, loginUI);
    const form = document.getElementById("login");
    form.addEventListener("submit", checkMethod);
});
router.on("/sing-up", () => {
    render(appRoot, registerUI);
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", postMethod);
});
router
    .on("/home", () => {
        console.log("Trang home được load");
        document.body.innerHTML = "<h1>Chào mừng đến trang Home!</h1>";
    })
    .resolve();
router.resolve();
