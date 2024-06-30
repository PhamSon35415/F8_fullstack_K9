// IFE
// (function (title) {
//     console.log("Hello", title);
// })("F8");

// Hàm con
// function display() {
//     function showinfo() {
//         console.log("Hello F8");
//     }
//     return showinfo;
//     // return function () {
//     //     console.log("Hello F8");
//     // };
// }
// // hàm showinfo dc gọi là hàm closure
// // =>Hàm có khả năng truy cập tới các biến của phạm vi chứa nó
// // chỉ gọi hàm trong phạm vi khai báo
// var show = display();
// show();

// var sum = function (a) {
//     return function (b) {
//         return a + b;
//     };
// };
// var add = sum(10);
// console.log(add(20));
// console.log(add(30));
// Đệ quy
// gọi lại chính hàm đang định nghĩa để thực thi các bài toán lặp lại
// trong lập trình web thường dùng để giải quyết các bài toán đa cấp
// lưu ý :khi gọi hàm => để ý điều kiện đừng
// Ưu điểm đễ ,Nhàn cho lập trình viên
// Nhược điểm chay chấm
// function shownumber(number) {
//     console.log(number);
//     if (number > 0) {
//         shownumber(number - 1);
//     }
// }
// shownumber(10);

var getTotal = function (n) {
    if (n === 1) {
        return 1;
    }
    return n + getTotal(n - 1);
    // 4
    // 3
};
var result = getTotal(4);
console.log(result);

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function showfibonacci(number, count = 1) {
    console.log(fibonacci(count));
    if (number > count) {
        showfibonacci(number, count + 1);
    }
}
//F(n)=F(n−1)+F(n−2)  F(0)=0,F(1)=1
let n = 10;
showfibonacci(10);
