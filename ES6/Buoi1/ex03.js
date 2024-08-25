// Arrow function
// const add = (a, b) => a + b;
// console.log(add(5, 7)); // Output: 12
// const getMsg = () => {
//     console.log("kij");
// };
// getMsg();

// const getUser=()=>({
//     name:"ok",
//     age:25,
// });
// const user = [
//     { id: "ok", age: 25 },
//     { id: "ok2", age: 25 },
//     { id: "ok3", age: 25 },
// ];
// const getUser = (userId) => user.find(({ id }) => userId === id);
// console.log(getUser("ok"));

// setTimeout(() => {
//     console.log("hello");
// }, 1000);

const users = {
    name: "phamson",
    getName: () => {
        console.log(this.name);
        return this.name;
    },
};
console.log(users.getName());

// Lưu ý khi sử dung arrow function
// 1. Không có this
// 2. Không có arguments
// 3. không dc dùng là function contructer
// 4. Không có prototype
