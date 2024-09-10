async function renderUser() {
    // get users
    const users = await getUsers();

    // bind data to html
    let elementUsers = "";
    users.forEach((user) => {
        elementUsers += `
            <div class="item">
                <div class='item-info'>
                    <span>${user.id}</span>
                    <span style='padding-left: 10px'>${user.name}</span>
                    <span style='padding-left: 10px'>${user.mail}</span>
                </div>
                <div class='item-action'>
                    <button onclick="onEditOrCreate(${user.id})">eit</button>
                    <button onclick="onEditOrCreate(${user.id})">del</button>
                </div>
            </div>
        `;
    });

    app.innerHTML = `<div class="list-item">${elementUsers}</div>`;
}
async function renderUserForm(id = null) {
    const user = await getUser(id);
    let form = `<form class="user-form">
        <input type="text" id="name" placeholder="Name" value="${user.name}">
        <input type="text" id="mail" placeholder="mail" value="${user.mail}">
        <input type="text" id="age" placeholder="age" value="${user.age}">
        <button onclick="onSave(even,'${user.id}')">${
        id ? "Update" : "Add"
    }</button>
    </form>`;

    console.log(id);
    app.innerHTML = form;
    console.log(user);
}
