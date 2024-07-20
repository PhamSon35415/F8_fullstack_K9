//
// var user = ["item1", "item2", "item3", "item4", "item5", "item6"];

// Array.prototype.map2 = function (call) {
//     var out = [];
//     var arr = this;
//     var length = arr.length;
//     for (var i = 0; i < length; i++) {
//         out.push(call(arr[i], i));
//     }
//     return out;
// };

// var newArr = user.map2(function (user, index) {
//     return `<h3>${index + 1} - ${user}</h3>`;
// });
// console.log(newArr);
// function constructor
// -tạo ra 1 bản thiết kế cho đố tượng
// khởi tạo đối tượng từ bản thế kế đó gọi là instance

function Person(name, email) {
    this.name = name;
    this.email = email;
    this.getName = function () {
        return this.name;
    };
    this.getEmail = function () {
        return this.email;
    };
}
var person1 = new Person("Pham son", "phamson35415@gmail.com");
// var person2 = new Person("An vũ", "anvu@gmail.com");
// console.log(person1.constructor.name);
// console.log(person1 instanceof Person);

// console.log(person2);
// // kiểm tra 1 biến có phải mảng hay không
// var user = { name: "item4" };
// if (user instanceof Array) {
//     console.log("Là mảng !");
// } else {
//     console.log("Không phải mảng !");
// }
// var ob={name:}
// phương thức tĩnh và thuộc tĩnh
// không phụ thuộc vào đối tượng và đảm bảo dữ liệu không thay đổi khi Constructor dược khởi tạo lại
// truy cập trực tiếp từ constructor
// với phương thức tĩnh thì muốn gọi phải chuyển sang dnagj object

Person.message = "Học js không khó";
Person.isPerson = function (instance) {
    return instance instanceof Person;
};
console.log(Person.message);
console.log(Person.isPerson(person1));
// thừ khóa thí trong phương thức tính sẽ trả về constructor

// với phương non static thì muốn gọi phải chuyển sang dnagj constructor
// non static property
Person.prototype.data = "Hello";
// non static method
Person.prototype.getData = function () {
    console.log(this.constructor.message); // chuyển về constructor
    return this.data;
};
Person.someThing = function () {
    console.log(this);
    console.log(new this().data);
    return "SomeThing";
};
console.log(person1.getData());
console.log(Person.someThing());
