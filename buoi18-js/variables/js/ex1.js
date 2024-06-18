// khai bao bien
// lưu ý sẽ dùng cú pháp
// var:co

var username, userEmail;
// hiển thị trong tap console
console.log(username);
// hiển thị lên giao điện trình duyệt
// document.write(x);
var x2 = "H2";
// var x = "<h2>CHào mừng JS " + x2 + "</h2>";
var x3 = `<h2>CHào mừng JS ${x2}</h2>`;
document.write(x3);
var a = 10;
var b = "cv";
var result = `<h2>Kết quả : ${a + b}</h2>`;
document.write(result);
// Toán tử
// biểu thức là toongwr hợp của toán hạng và toán tử
// toán tử số học
// +, - ,* ,/ , %, **
// lưu ý với phép cộng + chú ý kiễu dữ liệu và thực hiện ép kiểu
//  toán tử tăng và toán tử giảm ++,--
// x++ trả về giá trị trc khi tăng và ++x trả về giá trị sau khi tăng

// 1 3 5 4 4

// toán tử só sánh
//  >,<,<=,>=,!=,>==,<==,==,===,!==
// toán tử gán x+=10
// Toán tử logic: &&,||,!
// lưu ý trong tinh huống cần kết hợp mà cần ưu tiên thì cần thêm ()
// độ ưu tiên ! -> && -> ||
// toán tử 3 ngôi
//  x  ? dúng : sai
// toán tử nullish (??)
// kiểm tra null hoặc undefined
// Gtri ?? "kkk" nếu a là undefined hoặc null thì se lấy giá trị "kkk"
// var a1 = null;
// console.log(a1);
// console.log(a1 == null || a1 == undefined ? 10 : a1);

// truthy và falsy
// trong trường hợp cần trả về true hoặc false mà các giá trị tự dộng chuyển về true thì gọi là truthy và ngược lại
// falsy: 0,"",null,undefine, NaN,false
// && (áp dụng cho việc gán vào biểu thức) =>tìm giá trị của biểu thức sai
// var a = 10,
//     c = -5,
//     b = 0;
// console.log(a && b && c);
// || (áp dụng cho việc gán vào biểu thức) =>tìm giá trị của biểu thức dúng
var a = 10,
    c = -5,
    b = 0;
console.log(a || b || c);
