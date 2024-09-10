async function renderUser() {
    let users = await getUsers();
    let elementUser = "";
    users.forEach((user) => {
        elementUser = `<div class="item">
            <div class="item-info">
                <span>${user.id}</span>
                <span style="padding:0 10px;">${user.name}</span>
                <span style="padding:0 10px;">${user.email}</span>
            </div>
            <div>
                <button class="btn-update">Update</button>
                <button class="btn-delete">Delete</button>
            </div>
        </div>`;
    });
}
