// // mảng là cáu trúc dữ liệu có nhiều phần tử
// // mảng có thể chứa các kiểu dữ liệu khác nhau
// var use = ["Son", "IK", "Tùng"];
// console.log(use);

// console.log(Array.isArray(use));
// // kiểm tra 1 biến có phải là mảng hay không
// console.log(use.length);
// // Lấy số lượng phần tử
// console.log(use[1]);
// // truy cập vào 1 phần tử trong mảng
// use[1] = "Không";
// // cập nhâp giá trị 1 phần tử
// // use.push("ok");
// console.log(use);
// // thêm phần tử mới vào mảng
// for (const i in use) {
//     console.log(use[i]);
// }
// for (const i of use) {
//     console.log(i);
// }
// // duyệt qua từng giá trị
// var value = "ok";
// var userNew = [];
// for (let i = 0; i < use.length; i++) {
//     if (i === 0) {
//         userNew[0] = value;
//     }

//     userNew[userNew.length] = use[i];
// }
// var key = "an";
// var users = ["Phạm An", "Lê Anh", "Phạm Sơn", "Nguyễn Hoàng"];
// var userNew = [];
// for (const user of users) {
//     if (!user.toLocaleLowerCase().includes(key.toLocaleLowerCase())) {
//         userNew[userNew.length] = user;
//     }
// }
// console.log(userNew);

var number = [5, 6, 1, 3, 8, 2];
var max = 0;
var min = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] > number[max]) {
        max = i;
    }
    if (number[i] < number[min]) {
        min = i;
    }
}
var x = number[max];
number[max] = number[min];
number[min] = x;
console.log(number);
