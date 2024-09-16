// localStorage.setItem("name", "board");
// localStorage.setItem("age", "20");
// // localStorage.setItem("name", "board");
// let data = localStorage.getItem("age");
// let dataName = localStorage.getItem("name");
// console.log(data);
// console.log(dataName);
// // localStorage.removeItem("name");
// sessionStorage.setItem("age", 20);
// sessionStorage.setItem("name", "okla");
// const user = {
//     name: "okla",
//     age: 20,
// };
// sessionStorage.setItem("user", JSON.stringify(user));
// let data2 = sessionStorage.getItem("age");
// let dataName2 = sessionStorage.getItem("name");
// let dataUser = JSON.parse(sessionStorage.getItem("user"));
// console.log(data2, dataName2, dataUser);

// cookie
// token
// Chuỗi string có tác dụng xác thucwsjnguoiwf dùng
//
document.cookie = "name=son";
const cookieData = (document.cookie =
    "username=John Smith; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/");
console.log(cookieData.split(";")[0].split("=")[1]);
