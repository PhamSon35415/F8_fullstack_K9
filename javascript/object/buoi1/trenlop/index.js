// object: là 1 khái niêm trừ tường để ta mô tả một đối tượng cụ thể
// Đặc điểm (Thuộc tính)
// hành động (Phương thức)
// trong js hầu hết đều là đối tượng

// Khởi tạo
var user = {
    // key:value
    name: "Nguyễn Văn A",
    age: 20,
    address: "Hà Nội",
    getname: function () {
        console.log("Hello", this.name);
    },
};
// thêm key vào oblect
user.gender = "Nam";
user["NY"] = "Không";
// cập nhập giá trị 1 key trong object
user.age = 21;
// xóa 1 key trong object
delete user.age;
// lấy giá trị của 1 key trong object
console.log(user["NY"]); // Không
console.log(user.name); // Nguyễn Văn A
// lấy tất cả key trong object
console.log(Object.keys(user)); // [ 'name', 'age', 'address', 'gender',
// duyệt qua từng phần tửu
for (const key in user) {
    // console.log(user[key]);
    if (typeof user[key] === "function") {
        user[key]();
    } else {
        console.log(user[key]);
    }
}
//
// var product = {
//     name: "Iphone 13 pro max",
//     price: 2000,
//     color: "black",
//     info: {
//         ssd: "256G",
//         ram: "8G",
//     },
//     getname: function () {
//         console.log("Hello", this.name);
//     },
// };
// console.log(product.info.ssd);

// var oj1 = {
//     name: "Nguyễn Văn A",
//     age: 20,
// };
// var oj2 = {
//     role: "Sinh vien",
//     email: "Ph@gamil.com",
// };
// var oj3 = {};

// for (const key in oj1) {
//     oj3[key] = oj1[key];
// }
// for (const key in oj2) {
//     oj3[key] = oj2[key];
// }
// console.log(oj3);

//
user = {
    // key:value
    name: "Nguyễn Văn A",
    age: 20,
    address: "Hà Nội",
    getname: function () {
        console.log("Hello", this.name);
    },
};
// console.log(Object.keys(user)); //=> lấy danh sách key trong object
// kiểm tra 1 object có dữ liệu hay không
// var a = {};
// if (Object.keys(a).length) {
//     console.log("Có dữ liệu");
// } else {
//     console.log("Không có dữ liệu");
// }
// console.log(Object.values(user)); //=> lấy danh sách value trong object  và lưu vào 1 mảng
// Object.entries()=> lấy cả key và vale và trả về mảng 2 chiều
// console.log(Object.entries(user));
// Object.fromEntries()=> chuyển mảng 2 chiều thành object
var x1 = [
    ["name", "Sơn"],
    ["age", 10],
    ["SV", 189],
];
// console.log(Object.fromEntries(x1));
var query = {
    category: 1,
    keyword: "Khóa học fullstack",
    status: true,
};
var x = "";
for (const key of Object.entries(query)) {
    x += "&" + key;
}
x = x.replaceAll(" ", "+");
x = x.replaceAll(",", "=");
x = x.slice(1);
// console.log(x);
var queryString = Object.entries(query)
    .map(function (value) {
        return value.join("=");
    })
    .join("&")
    .replaceAll(" ", "+");
console.log(queryString);
queryString = queryString.replaceAll("+", " ");
var te = ["true", "false"];
var f2 = queryString.split("&").map(function name(value) {
    var test = value.split("=");
    if (!isNaN(+test[1])) {
        test[1] = +test[1];
    }
    if (te.includes(test[1])) {
        test[1] = test[1] === "true";
    }
    return test;
});

console.log(f2);
// object.assign(target,source1,source2,...)=> nối thành object

var oj1 = {
    name: "Nguyễn Văn A",
    age: 20,
};
var oj2 = {
    role: "Sinh vien",
    email: "Ph@gamil.com",
    getname: function () {
        return this.name;
    },
};
var newoj = Object.assign({}, oj1, oj2);
console.log(newoj);
// từ khóa this
var user = {
    name: "phạm son",
    email: "Phmson@gmail.com",
    getname: function () {
        var result = [];
        // var _this = this;
        Object.keys(this).forEach(function (key) {
            if (typeof this[key] !== "function") {
                result.push(this[key]);
            }
        }, this);
        console.log(result);
    },
};
// console.log(user.getname());
// hàm bind
// console.log(oj2.getname.bind(a)());
// hàm call(a,10,10)
function something(params, b) {
    console.log(this, params, b, "f");
}
something.call(user, 3, 2);
// var arg = [10, 2];
// something.apply(user, arg);
// user.getname();
// trong js hàm tạo object là lớn nhất
// console.log(Object.prototype);
