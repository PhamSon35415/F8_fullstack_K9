const userEndPoint = "http://localhost:3000/user";
let listEl = document.querySelector(".list");
let nameEl = document.querySelector(".inputName");
let btnEl = document.querySelector(".btn");
let formEl = document.querySelector(".formInput");

let getUser = async () => {
    const data = await fetch(userEndPoint);
    const user = await data.json();
    return user;
};
let check;
let main = async () => {
    const user = await getUser();
    user.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${item.name}</span>  
        <button class="btnUpdate" onclick="update('${item.name}','${item.id}')">Update</button>
        <button class="btnDelete" onclick="deleteEl('${item.id}')">Delete</button>`;
        listEl.append(li);
    });
};
const createUser = async (name) => {
    const body = JSON.stringify({
        name: name,
    });
    // call api

    const response = await fetch(userEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    });
};
const update = async (name, id) => {
    check = id;
    nameEl.value = name;
};
const deleteEl = async (id) => {
    const response = await fetch(`${userEndPoint}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

main();
btnEl.addEventListener("click", async () => {
    const name = nameEl.value;
    console.log(check);

    if (check) {
        const body = JSON.stringify({
            name: name,
        });
        const response = await fetch(`${userEndPoint}/${check}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
        if (response.status === 200) {
            console.log("updated");
            check = null;
        }
    } else {
        createUser(name);
    }
});
