// là kiểu dữ liệu nguyên thủy dùng để sử lý số
// Hàm tạo của number là number
console.dir(Number);
var a = 10;
console.log(typeof a);
console.log(a.constructor.name === "Number");
// loại bỏ những giá trị
// console.log(typeof NaN);
// console.log(typeof Infinity);

// ép kiểu (Cast)
var b = "28";
console.log(Number("10"));
console.log(typeof +b);
console.log(parseInt(b));
console.log(parseFloat(b));
// lưu ý khi ở trong biểu thức có các biểu thức toán học => js tự động ép về kiểu số (Trừ toán tử +)
var a = "10";
var b = 20;
console.log(a * b);
// Số NaN -> ép kiểu thất bại
var a = "10a" * 2;
// Hàm kiểm tra NaN
console.log(isNaN(a) ? "Là số NaN" : "Không phải số NaN");
console.log(Number.isNaN(a) ? "Là số NaN" : "Không phải số NaN");
// số infinity
var a = 1000 ** 1000;
console.log(a === Infinity && a === -Infinity ? "Vượt giới hạn" : a);
// kiểm tra số nguyên
var a = 10.2;
console.log(Number.isInteger(a));

// kiểm tra số thực
console.log(a === parseFloat(a));
// lấy 2 chữ số phần thập phân và lam tròn chuyển về chuỗi
var a = 1233.373567;
// 2 hàm này đều chuyển về chuỗi
console.log(a.toFixed(2));
console.log(a.toPrecision(3));
// chuyển dịnh dạng
var price = 120000000;
console.log(price.toLocaleString());
var numbers = [
    5,
    "10",
    null,
    2,
    undefined,
    [],
    NaN,
    Infinity,
    8,
    -Infinity,
    {},
    [1],
    7,
    true,
    12,
    false,
];
var newnumber = numbers.reduce(function (prev, curr) {
    var x = parseFloat(curr);
    if (
        !Number.isNaN(x) &&
        Math.abs(x) !== Infinity &&
        !Array.isArray(x) &&
        x % 2 !== 0
    ) {
        return (prev += x);
    }

    // if (curr % 2 !== 0) prev += curr;
    return prev;
}, 0);
console.log(newnumber);

// ceil :làm tròn lên
// floor: làm tòn xuống
// pow: lũy thừa
// Ramdom : ra số ngẫu nhiên 0<= <=1
