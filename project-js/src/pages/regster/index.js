export default function render() {
    const app = document.getElementById("app");
    const html = `
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
    app.innerHTML = html;
}
