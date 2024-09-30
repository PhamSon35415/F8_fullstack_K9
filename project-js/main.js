import Navigo from "navigo";
import loginUI, { checkMethod } from "./src/pages/login.js";
import registerUI, { postMethod } from "./src/pages/register.js";
import HomeUI, { addClick, getPost } from "./src/pages/home.js";
const render = (position, content) => {
    position.innerHTML = content();
};

const appRoot = document.getElementById("app");
export const router = new Navigo("/");

router.on("/", () => {
    const token = localStorage.getItem("token");
    if (!token) {
        router.navigate("/login");
        return;
    }
    render(appRoot, HomeUI);
    getPost();
});
router.on("/login", () => {
    render(appRoot, loginUI);
    const form = document.getElementById("login");
    form.addEventListener("submit", checkMethod);
});
router.on("/sing-up", () => {
    render(appRoot, registerUI);
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", postMethod);
});
router.resolve();
