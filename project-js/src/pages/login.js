import Navigo from "navigo";

const baseUrl = "http://103.159.51.69:2000/login";
const router = new Navigo("/");
export function checkMethod(event) {
    alert("check");
    event.preventDefault();
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const data = {
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
                throw new Error("Lỗi!");
            }
            return response.json();
        })
        .then((result) => {
            localStorage.setItem("token", JSON.stringify(result));
            console.log("Success:", result);
            alert("Login!");
            router.navigate("/home");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Đăng nhập thất bại, vui lòng thử lại!");
        });
}

export default function loginUI() {
    return `
        <div class="form-container">
            <div class="box">
                <h1 class="title">Login</h1>
                <form class="form" id="login">
                    <input type="email" class="input" placeholder="Email" id="email" required />
                    <input type="password" class="input" placeholder="Password" id="password" required />
                    <button class="btn">Login</button>
                    <a class="btn-sing-up" href="./sing-up">Bạn chưa có tài khoản ?</a>
                </form>
            </div>
        </div>
    `;
}
