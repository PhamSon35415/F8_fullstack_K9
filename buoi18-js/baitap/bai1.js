var a = 5;
var b = 10;
a = a + b; // a = 15
b = a - b; // b = 5
a = a - b; // a = 10

console.log("Bài 1: Sau khi hoán vị: a =", a, ", b =", b);

console.log("Bai 2: 10 + 20 + 5^10 / 2 =", 10 + 20 + 5 ** 10 / 2);

let a1 = 5;
let b1 = 10;
let c1 = 7;

let max;

if (a1 >= b1 && a1 >= c1) {
    max = a1;
} else if (b1 >= a1 && b1 >= c1) {
    max = b1;
} else {
    max = c1;
}

console.log("Bai 3: Số lớn nhất là:", max);

let x = 5;
let y = -10;

if ((x >= 0 && y >= 0) || (x < 0 && y < 0)) {
    console.log("Bài4: Hai số cùng dấu");
} else {
    console.log("Bài4: Hai số khác dấu");
}

let a2 = 5;
let b2 = 2;
let c2 = 9;

if (a2 > b2) {
    a2 = a2 + b2;
    b2 = a2 - b2;
    a2 = a2 - b2;
}
if (a2 > c2) {
    a2 = a2 + c2;
    c2 = a2 - c2;
    a2 = a2 - c2;
}
if (b2 > c2) {
    b2 = b2 + c2;
    c2 = b2 - c2;
    b2 = b2 - c2;
}

console.log(" Bài 5: Thứ tự tăng dần:", a2, b2, c2);
