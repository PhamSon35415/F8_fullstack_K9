import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FButton, Input, FCommonTable } from "./components";
import { v4 } from "uuid";

function App() {
    const columns = ["id", "name", "age", "gender", "address", "action"];
    const [check, setCheck] = useState(false);
    const [users, setUsers] = useState([
        { id: v4(), name: "John", age: 25, gender: "male", address: "HN" },
    ]);
    // const modal = document.getElementById("post-modal");
    // const addUserBtn = document.getElementById("view_addUser");
    // const updateBtn = document.querySelectorAll(".edit-btn");
    // const closeModalBtn = document.querySelector(".close");
    // addUserBtn.onclick = function () {
    //     modal.style.display = "block";
    // };
    // updateBtn.forEach((item) => {
    //     item.onclick = function () {
    //         modal.style.display = "block";
    //     };
    // });
    // closeModalBtn.onclick = function () {
    //     modal.style.display = "none";
    // };
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // };
    const [user, setUser] = useState({
        id: v4(),
        name: "",
        age: "",
        gender: "",
        address: "",
    });

    const onInput = (e, key) => {
        const updateUser = { ...user };
        updateUser[key] = e.target.value;
        setUser({ ...updateUser });
    };

    const onSave = () => {
        let isValid = true;
        const name = user.name;
        const errorName = document.getElementById("errorName");
        const errorAge = document.getElementById("errorAge");
        const errorGender = document.getElementById("errorGender");
        const errorAddress = document.getElementById("errorAddress");
        if (!name) {
            errorName.innerText = "Vui lòng nhập tên.";
            isValid = false;
        } else {
            errorName.innerText = "";
        }
        const age = user.age;
        if (!age || isNaN(age) || age <= 0) {
            errorAge.innerText = "Vui lòng nhập tuổi hợp lệ.";
            isValid = false;
        } else {
            errorAge.innerText = "";
        }
        const gender = user.gender;
        if (!gender) {
            errorGender.innerText = "Vui lòng chọn giới tính.";
            isValid = false;
        } else {
            errorGender.innerText = "";
        }
        const address = user.address;
        if (!address) {
            errorAddress.innerText = "Vui lòng nhập địa chỉ.";
            isValid = false;
        } else {
            errorAddress.innerText = "";
        }
        if (isValid) {
            if (check) {
                setUsers(
                    users.map((u) => {
                        return u.id === user.id ? user : u;
                    })
                );
                setCheck(false);
            } else {
                setUsers([...users, user]);
            }
            setUser({
                id: v4(),
                name: "",
                age: "",
                gender: "",
                address: "",
            });
        }
    };

    const onEditUser = (id) => {
        const editUser = users.find((user) => user.id === id);
        setUser(editUser);
        setCheck(true);
    };
    const onDeleteUser = (id) => {
        const isConfirmed = window.confirm(
            "Bạn có chắc chắn muốn xóa người dùng này?"
        );
        if (isConfirmed) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <div>
            {/* <div id="post-modal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span> */}
            <input
                type="text"
                placeholder="name"
                onChange={(e) => onInput(e, "name")}
                value={user.name}
            />
            <span class="error" id="errorName"></span>
            <input
                type="text"
                placeholder="age"
                onChange={(e) => onInput(e, "age")}
                value={user.age}
            />
            <span class="error" id="errorAge"></span>
            <select
                name="gender"
                onChange={(e) => onInput(e, "gender")}
                value={user.gender}
            >
                <option value="">Chọn giới tính</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <span class="error" id="errorGender"></span>
            <input
                type="text"
                placeholder="address"
                onChange={(e) => onInput(e, "address")}
                value={user.address}
            />
            <span class="error" id="errorAddress"></span>
            <br />
            <button onClick={onSave}>{check ? "Update" : "Save"}</button>
            {/* </div>
            </div> */}
            {/* <button class="btn" id="view_addUser">
                Thêm User
            </button> */}
            <FCommonTable
                columns={columns}
                rows={users}
                onEditUser={onEditUser}
                onDeleteUser={onDeleteUser}
            />
        </div>
    );
}

export default App;
