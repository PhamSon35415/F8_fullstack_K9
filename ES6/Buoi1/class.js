// class
// extends
// Khai báo property, method
// -constructor
// -static
// -super

class Person {
    // khai báo thuocj tính
    name = "phạm sơn";
    email = "phamson@gmail.com";
    #income = 120; //private
    #data = ["item1", "item2", "item3"];
    // thêm đấu # vào đằng trc sẽ là private
    // Phương thức khởi tạo
    static mes = "Học js khó";
    constructor() {}
    // phương thức khác
    getName() {
        return this.name;
    }
    getIncome() {
        return this.#income;
    }
    #getInfo() {
        return {
            name: this.name,
            email: this.email,
        };
    }
    get latest() {
        return this.#data[this.#data.length - 1];
    }
    set latest(value) {
        this.#data.push(value);
    }
    static getMessage() {
        return this.mes;
    }
}
const person = new Person();
console.log(person.getIncome());
// console.log(person.getInfo());
console.log(Person.mes);
console.log(Person.getMessage());

class Counter {
    name = "F8";
    handleClick() {
        console.log(this);
    }
    render() {
        const h1 = document.createElement("h1");
        h1.innerText = 0;
        document.body.append(h1);
        let btn = document.createElement("button");
        btn.innerText = "Click";
        btn.addEventListener("click", this.handleClick);
        document.body.append(btn);
    }
}
