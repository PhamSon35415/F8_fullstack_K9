// Array.from()=> ép kiểu dữ liệu khác về mảng
// var fullname ="Hoàng An"
// var users = {
//     0: "User 1",
//     1: "User 2",
//     2: "User 3",
//     3: "User 4",
// };
// users = Array.from(users);
// console.log(users);
//Tham chiếu
// var a = ["Phạm Sơn", "X*"];

// Sao chép mảng shallow coppy (coppy ở cấp ngoài cùng thôi)
//=>dùng các phương thức trả về mảng mơi
// var b = a.slice(0);
// var b = Array.from(a);
// var b = [...a];

// Deep coppy (sao chép toàn bộ) Đệ quy, JSON
// B1 chuyển arr thành json
// var json = JSON.stringify(a);
// b2 chuyển json THÀNH Arr
// var b = JSON.parse(json);

// b[0] = "Hoàng An";
// console.log(a);
// var a = [1, 2, 3, 4, 5];
// var a=["son"]
// var b=["son"]
// console.log(a=b);// không thể so sánh 2 arr
