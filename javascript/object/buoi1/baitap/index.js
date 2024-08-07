var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    var [key, values] = field.split(".");
    // console.log(key); name
    // console.log(values); min1
    var test = errors[key];
    if (!test) return null;

    if (values) {
        return test[values] || null;
    } else {
        return test.required || Object.values(test)[0] || null;
    }
}

console.log(getError("name"));
console.log(getError("name.min"));
console.log(getError("email"));
console.log(getError("email.unique"));
console.log("Bai 2");
const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

// console.log(customers[0].name);
function createCustomers(cus) {
    var result = cus;
    for (const key of result) {
        var x = key.name.split(" ");
        key.shortName = x[0] + " " + x[x.length - 1];
    }
    result.sort(function (a, b) {
        return a.age - b.age;
    });
    return result;
}
console.log(createCustomers(customers));
console.log("bai 3");
const data = [];
function handleRegister(...args) {
    if (args.length !== 3) {
        console.log("Message Create: Thông tin không đầy đủ");
        return null;
    }
    if (!args[0] || !args[1] || !args[2]) {
        console.log("Message Create: Thông tin không đầy đủ");
        return null;
    }
    return (data[data.length] = {
        name: args[0],
        password: args[1],
        email: args[2],
        role: "user",
    });
}
function handleLogin(email, pass) {
    for (const key of data) {
        if (key.email === email && key.password === pass) {
            return key;
        }
    }
    return "Message login: Thông tin đăng nhập không hợp lệ";
}
const dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
const dataRegister1 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
const dataRegister2 = handleRegister("1234567", "nguyenvanb@email.com");
console.log(data);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
