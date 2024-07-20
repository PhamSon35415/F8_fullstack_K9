// function User() {
//     this.name = "John";
//     this.email = "pham@gamil.com";
//     this.first = function () {
//         return {
//             name: this.name,
//             email: this.email,
//         };
//     };
// }
// function Authentication() {
//     User.call(this);
//     this.getProfile = function () {
//         return this.first();
//     };
// }
// var user = new Authentication();
// console.log(user.getProfile());
// setter câp nhập giá trị của thuộc tính thông qua 1 hàm
//  getter lấy gía trị của thuộc tính thông qua 1 hàm
// users.length
// function Person() {
//     this.data = ["item1", "item2", "item3"];
//     this.getPerson = function () {
//         return this.data[this.data.length - 1];
//     };
// }
// Person.prototype = {
//     get latest() {
//         return this.data[this.data.length - 1];
//     },
//     set latest(value) {
//         this.data.push(value);
//     },
// };
// // => gọi giống thuộc tính
// var person = new Person();
// console.log(person.getPerson());

// Sử dụng constructor giống như 1 function thông thường
function Person() {
    this.name = "Phạm Sơn";
    this.email = "phamson3541@gamil.com";
    return "ok";
}
var person = new Person();
console.log(person);
console.log(Person());

var age = new Number(10);
console.log(age);
console.log(Number(10));
// cách dùng từ khóa new mà vẫn trả về dữ liệu
function Transformer() {}
function UserTransformer(instance) {
    this.config = function () {
        return {
            UID: instance.id,
            fullname: instance.name,
            email: instance.email,
            status: instance.status,
        };
    };
    // return "okla2";
    return this.config();
}
var user = {
    id: 1,
    name: "pham sơn",
    email: "phamson35415@gamil.com",
    status: true,
};

var newUser = new UserTransformer(user);
console.log(newUser);
// console.log(UserTransformer());
// nếu trong constructor return ra object thì khi khởi tạo instance từ constructor (VD: var newUser = new UserTransformer(user)) => instance chứa dữ liệu return
var user = [
    { id: 1, name: "pham son", email: "d@gamil.com" },
    { id: 2, name: "pham son1", email: "d1@gamil.com" },
    { id: 3, name: "pham son2", email: "d2@gamil.com" },
    { id: 4, name: "pham son3", email: "d3@gamil.com" },
];
// document.write(
//     user
//         .map(function (user) {
//             return `<div>
//     <h2>ID: ${user.id}</h2>
//     <h2>Name: ${user.name}</h2>
//     <h2>Email: ${user.email}</h2>
//     </div>`;
//         })
//         .join("")
// );
document.write(
    user
        .filter(function (user) {
            return user.email !== "d1@gamil.com";
        })
        .map(function (user) {
            return `<div>
        <h2>ID: ${user.id}</h2>
        <h2>Name: ${user.name}</h2>
        <h2>Email: ${user.email}</h2>
        </div>`;
        })
        .join("")
);
