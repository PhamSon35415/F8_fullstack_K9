// biến lưu trữ đữ liệu ( thể hiện đưới dạng hành động)
// cú pháp  1, định nghĩa hàm function tenHam(thamso1,thamso2){}
// cú pháp  2, định nghĩa hàm function tenHam(thamso1,thamso2="mac dinh"){}
// 2. gọi hàm tenHam(thamso1,thamso2)
// function getTotal(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// getTotal(3, 4);
// function showMessage() {
//     console.log("Okla");
// }
// showMessage();

// hàm không có giá trị trả về (void function)

// hàm có giá trị trả về  (return function)
// lưu ý khi dùng return khi đã gọi từ khóa return thì hàm sẽ dc thoát
function getTotal(a, b) {
    var total = a + b;
    return total;
}
// viết hàm kiểm tra snt
function showMessage(number, isPrime, status) {
    var msgSuccess = `${number} Là số nguyên tố`;
    var msgError = `${number} Không Là số nguyên tố`;
    if (!isPrime) {
        return status;
    }
    console.log(status ? msgSuccess : msgError);
    return;
}
function isPrime(number, isShow = false) {
    if (number <= 1 || number % 1 !== 0) {
        return showMessage(number, isShow, false);
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return showMessage(number, isShow, false);
        }
    }
    return showMessage(number, isShow, true);
}

// isPrime(11, true);
// biến toàn cực và biên cụ bộ
// biến toàn cực là biến được khai báo ngoài hàm
// biến cục bộ là biến được khai báo trong hàm
// var globalVariable = "Toàn Cực";
// function showMessage() {
//     var localVariable = "Cục Bộ";
// }

// Hàm ẩn danh (anonymous function)
/**
 -Không có tên
 - muốn chạy dc thì phải gán vào 1 biến hoặc gọi bằng 1 hàm khác thông qua tham số
 */
// var something = function (x) {
//     // Expression function
//     console.log(x);
// };
// something(9);
// var something = function () {};
// if (typeof something === "function") {
//     console.log("Là Function");
// }

// arguments keyword
// var getMax = function () {
//     console.log(arguments);
// };
// getMax(2, 334, 5, 56, 2);

// rest parameter
var getMax = function (a, b, ...args) {
    console.log(a, b);
    console.log(args);
};
getMax(1, 2, 3, 4, 5, 6, 7, 8, 9);
