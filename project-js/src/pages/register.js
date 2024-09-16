import Navigo from "navigo";
import loginUI from "./login";

const baseUrl = "http://103.159.51.69:2000/master/user";
const router = new Navigo("/");
export function postMethod(event) {
    alert("check");
    event.preventDefault();
    // localStorage.setItem("test", "okk");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const data = {
        name,
        email,
        password,
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Lỗi khi gửi dữ liệu!");
            }
            return response.json();
        })
        .then((result) => {
            console.log("Success:", result);
            alert("Đăng ký thành công!");
            router.navigate("/");
            router.updatePageLinks();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Đăng ký thất bại, vui lòng thử lại!");
        });
}
export default function registerUI() {
    return `
        <div class="form-container">
            <div class="box">
                <h1 class="title">Register</h1>
                <form class="form" id="registerForm">
                    <input type="text" class="input" placeholder="Username" id="name" required />
                    <input type="email" class="input" placeholder="Email" id="email" required />
                    <input type="password" class="input" placeholder="Password" id="pass" required />
                    <button class="btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    `;
}
