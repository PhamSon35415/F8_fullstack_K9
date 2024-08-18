// function Person() {
//     this.name = "John";
//     this.age = 30;
// }
// var person = new Person();
// console.log(person.name); // John

class Person {
    name = "phạm sơn";
    age = 20;
    static mes = "okla";
    constructor(name, age) {
        console.log("Hàm khởi tạo !");
        console.log(`Name ${name} Email ${age}`);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
var person = new Person("pl", 3);
// nếu class con ké thừ class cha mà có constructor thì cuối constructor của phần tử con thì phải thêm super();
console.log(person);
console.log(Person.mes);

class User extends Person {
    constructor() {
        console.log("Hàm khởi tạo !");
        super();
    }
    getInfo() {
        return `Name: ${this.getName()} Age: ${this.getAge()}`;
    }
}
var user = new User();
console.log(user.getInfo());
