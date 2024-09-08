const todoPoint = "http://localhost:3000/jobs";
let btnAdd = document.querySelector(".btn-add");
let windowEl = document.querySelector(".input-window");
let btnSave = document.querySelector(".btn-save");
let btnCancel = document.querySelector(".btn-cancel");
let btnListComplete = document.querySelector(".btn-list-complete");
let inputName = document.querySelector(".input-name");
let listEl = document.querySelector(".list-todo");
let listComplete = document.querySelector(".list-complete");
let mainWd = document.querySelector(".main-window");
let quantity = document.querySelector(".quantity");
let form = document.querySelector(".form");
let check = null;
let statusCheck = null;
let inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("input", () => {
    let searchText = inputSearch.value.trim().toLowerCase();
    filterTodos(searchText);
});

btnAdd.addEventListener("click", () => {
    windowEl.classList.remove("hidden");
});

btnCancel.addEventListener("click", () => {
    windowEl.classList.add("hidden");
    inputName.value = "";
    check = null;
});

btnSave.addEventListener("click", () => {
    let text = inputName.value.trim();
    if (text) {
        windowEl.classList.add("hidden");
        handleJob(text);
        inputName.value = "";
        check = null;
        main();
    }
});

btnListComplete.addEventListener("click", () => {
    btnListComplete.classList.toggle("active");
});

mainWd.addEventListener("submit", (e) => {
    e.preventDefault();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

let getTodo = async () => {
    const data = await fetch(todoPoint);
    const job = await data.json();
    console.log(job);
    return job;
};

let main = async () => {
    listEl.innerHTML = "";
    listComplete.innerHTML = "";
    quantity.innerText = 0;
    const job = await getTodo();
    job.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `
            <p class="name-job">${item.title}</p>
            <div class="action-job">
                <i class="btn-delete fa-solid fa-trash" onclick="deleteEl('${item.id}')"></i>
                <i class="btn-update fa-solid fa-pen-to-square" onclick="openUpdate('${item.title}', '${item.id}')"></i>
                <i class="btn-complete fa-solid fa-check-to-slot" onclick="complete('${item.id}', '${item.status}')"></i>
            </div>`;
        if (!item.status) {
            listEl.append(li);
        } else {
            listComplete.append(li);
            quantity.innerText++;
        }
    });
};

const filterTodos = async (searchText) => {
    const todos = await getTodo();
    listEl.innerHTML = "";
    listComplete.innerHTML = "";
    quantity.innerText = 0;

    todos.forEach((item) => {
        if (item.title.toLowerCase().includes(searchText)) {
            let li = document.createElement("li");
            li.classList.add("item");
            li.innerHTML = `
                <p class="name-job">${item.title}</p>
                <div class="action-job">
                    <i class="btn-delete fa-solid fa-trash" onclick="deleteEl('${item.id}')"></i>
                    <i class="btn-update fa-solid fa-pen-to-square" onclick="openUpdate('${item.title}', '${item.id}')"></i>
                    <i class="btn-complete fa-solid fa-check-to-slot" onclick="complete('${item.id}', '${item.status}')"></i>
                </div>`;
            if (!item.status) {
                listEl.append(li);
            } else {
                listComplete.append(li);
                quantity.innerText++;
            }
        }
    });
};

main();

const handleJob = async (name) => {
    let method = "";
    let endPoint = "";
    let body;
    if (check) {
        body = JSON.stringify({
            title: name,
        });
        method = "PATCH";
        endPoint = `${todoPoint}/${check}`;
    } else {
        body = JSON.stringify({
            title: name,
            status: 0,
        });
        method = "POST";
        endPoint = todoPoint;
    }
    await fetch(endPoint, {
        method: method,
        body: body,
        headers: {
            "Content-Type": "application/json",
        },
    });
    check = null;
    main();
};

const complete = async (id, status) => {
    const newStatus = status == 0 ? 1 : 0;
    const body = JSON.stringify({
        status: newStatus,
    });
    await fetch(`${todoPoint}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: body,
    });
    main();
};

const deleteEl = async (id) => {
    await fetch(`${todoPoint}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    main();
};

const openUpdate = (name, id) => {
    console.log(name, id);

    check = id;
    inputName.value = name;
    windowEl.classList.remove("hidden");
};
