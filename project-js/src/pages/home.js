import { router } from "../../main";

export default function HomeUI() {
    return `
       <div class="header">
        <h1>F8-Project</h1>
        <div class="user-info">
        <i class="fa-solid fa-user"></i>
            <span style="margin-left:10px;"> Sơn</span>
        </div>
        <button id="btnLogout">Logout</button>
    </div>
    
    <div class="container">
        <h2>List Post</h2>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>content</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody id="body-table"> 
            </tbody>
        </table>
         <div id="post-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Add New Post</h2>
            <form id="post-form">
                <label for="title">Title:</label>
                <input type="text" class="input" id="title" name="title" id="title-content" required><br><br>
                <label for="content" >Content:</label>
                <textarea id="content" class="input" name="content" id="content" required></textarea><br><br>
                <button type="submit" class="btn" id="save">Add Post</button>
            </form>
        </div>
    </div>
        <button class="btn" id="add-post-btn">Thêm mới</button>
    </div>
    `;
}

export const addClick = async () => {
    const modal = document.getElementById("post-modal");
    const post_form = document.getElementById("post-form");
    const addPostBtn = document.getElementById("add-post-btn");
    const closeModalBtn = document.querySelector(".close");
    const btnLogout = document.getElementById("btnLogout");
    post_form.addEventListener("submit", (e) => {
        e.preventDefault();
        postContent();
    });
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("token");
        router.navigate("/login");
    });
    addPostBtn.onclick = function () {
        modal.style.display = "block";
    };
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    };
};
console.log(JSON.parse(localStorage.getItem("token")));
export const getPost = async () => {
    let data = null;
    let token = JSON.parse(localStorage.getItem("token")).access;
    console.log(`bearer ${token}`);
    try {
        const response = await fetch(`http://103.159.51.69:2000/post`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            data = await response.json();
        }
        if (response.status === 401) {
            throw new Error("Hết hạn");
        }
    } catch (e) {
        refreshToken();
        getPost();
    }
    console.log(data);
    if (data) {
        let bodyTable = document.getElementById("body-table");
        console.log(data.length);
        if (data.length == 0) {
            bodyTable.innerHTML = `<p style="color:red;font-size:20px;">Không có bài viết nào</p>`;
        } else {
            bodyTable.innerHTML = "";
            data.forEach((post) => {
                let item = document.createElement("tr");
                item.innerHTML = `
                <tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td>${post.content}</td>
                            <td>
                                <button class="edit-btn" ><i class="fa-solid fa-pen-to-square" style="color: #63E6BE;"></i></button>
                                <button class="delete-btn" onclick="deleteEl(${post.id})"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button>
                            </td>
                        </tr>`;
                bodyTable.append(item);
            });
        }
    }
};
getPost();
const postContent = async () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    let token = JSON.parse(localStorage.getItem("token")).access;
    const body = {
        title: title,
        content: content,
    };
    try {
        const response = await fetch("http://103.159.51.69:2000/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            const modal = document.getElementById("post-modal");
            modal.style.display = "none";
            getPost();
        }
        if (response.status === 401) {
            throw new Error("Hết hạn");
        }
    } catch (e) {
        refreshToken();
        postContent();
    }
};
const refreshToken = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token || !token.refresh) {
        throw new Error("Refresh token không tồn tại hoặc không hợp lệ.");
    }
    const response = await fetch(
        "http://103.159.51.69:2000/login/get_new_token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: token.refresh,
            }),
        }
    );
    if (!response.ok) {
        throw new Error("Lỗi khi làm mới token: " + response.status);
    }
    const newToken = await response.json();
    localStorage.setItem("token", JSON.stringify(newToken));
};
const deleteEl = async (id) => {
    try {
        let token = JSON.parse(localStorage.getItem("token")).access;
        const response = await fetch(`http://103.159.51.69:2000/post/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`,
            },
        });
    } catch (e) {
        refreshToken();
        deleteEl(id);
        console.error("Lỗi khi làm mới token:", e);
    }
};
