/**
 * Object array
 * Destructuring :Là 1 cú pháp của es6 sẽ cho phép phá vỡ cấu trúc của array , object để truy cập phầ tử đẻ lưu vào các biến riêng biệt
 *
 *
 *
 *
 *
 *
 *
 */
// const user = {
//     fullname: "Pham sơn",
//     email: "nfwehfb fvfnbhvjf",
//     age: undefined,
//     "status-text": "ok",
//     address: "hn",
//     gender: "Nam",
//     position: "Sinh viên",
// };
// // const fullname=user.fullname
// // const email=user.email
// const { fullname: userName, email, age = 10, "status-text": ok } = user;
// // nếu age bằng null hoặc undefined thì sẽ lấy giá trị 10
// console.log(userName, email, age, ok);
// var key = "fullname";
// const { [key]: a } = user;
// console.log(a); //phạm sơn

// // Lấy ra nhưng cái còn lại ngoài fullname và email
// var { fullname, email, ...okla } = user;

//
// const profile = {
//     displayName: "pHạm sơn",
//     emails: {
//         fullname: "ìnkjrgj",
//         email: "nkjrgjrgj",
//     },
// };
// const {
//     displayName: display,
//     emails: { email, fullname },
// } = profile;
// console.log(display, email);

//

/**
 Array
 */
// const listUser = ["Okla", "Phạm sơn", "Hà nội", "Nam", "Sinh viên"];
// // Lấy ra 2 phần tử đầu tiên
// var [user1, user2] = listUser;
// // Lấy ra 2 phần tử cuối cùng
// var [userLast1, userLast2] = listUser.slice(-2);
// // Lấy ra 2 phần tử đầu tiên và 2 phần tử cuối cùng
// var [user1, user2, , , userLast2] = listUser;
// console.log(user1, user2, userLast2);
// var [user1, user2, ...ptuConLai] = listUser;
// console.log(user1, user2, ptuConLai);

//function
// function SomeThing({ name, age }) {
//     // const {name,age}=otp
//     console.log(name, age);
// }
// SomeThing({
//     name: "Phạm sơn",
//     age: 20,
//     gender: "Nam",
//     email: "Phám#",
// });
// function something({
//     name,
//     email = "phamson@gamil.com",
//     status = true,
//     isShow = false,
// }) {
//     console.log(name, email, status, isShow);
// }
// // something("user1", "okla@gmail.com");
// something({ name: "user1", status: false });

/**
 Spread operator


 */
// const user = {
//     name: "Phạm Sơn",
//     age: 20,
//     gender: "Nam",
//     email: "phamsongmail.com",
// };
// const newObj = {
//     name1: "Phạm Sơn",
//     age1: 23330,
//     ...user,
// };
// console.log(newObj);

// const data = {
//     msg: "Học js khó vãi",
//     product: ["product1", "product2"],
// };
// // sao chép object data và lưu và biến newData sau đó thực hiện thêm 3 key product
// const newData = { ...data, product: [...data.product, "product3"] };
// console.log(newData);
// console.log(data);

// object literal enhanced
const name = "Phạm sơn";
const email = "phamson@gamil.com";
const age = 20;
const user = {
    name,
    email,
    age,
    getname() {
        return this.name;
    },
};
console.log(user);
console.log(user.getname());
