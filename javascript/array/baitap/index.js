console.log("Bài 1");
var number = [5, 6, 1, 3, 8, 2];
var max = 0;
var min = 0;

for (let i = 0; i < number.length; i++) {
    if (number[i] > number[max]) {
        max = i;
    }
    if (number[i] < number[min]) {
        min = i;
    }
}
console.log(`Vị trí max là: ${max} Giá trị ${number[max]}`);
console.log(`Vị trí tự Min là: ${min} Giá trị ${number[min]}`);
// BÀi 2
console.log("Bài 2");
var number2 = [5, 6, 11, 1, 3, 8];
function snt(x) {
    if (x < 0) {
        return false;
    }
    if (typeof x === "number") {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
    } else {
        console.log("Không phải số !");
        return false;
    }

    return true;
}
var sum = 0;
for (const x of number2) {
    if (snt(+x)) {
        sum += x;
    }
}
if (sum !== 0) {
    console.log(`Tổng các số nguyên tố trong mảng là :${sum}`);
} else {
    console.log("Không có số nguyên tố");
}
//bai3
console.log("Bài 3");
var number3 = [5, 6, 5, 1, 3, 6, 8, 8, 8, 2];
var newNumber = [];
for (let i = 0; i < number3.length; i++) {
    var x = 0;
    for (let j = i; j < number3.length; j++) {
        if (number3[i] === number3[j]) {
            x++;
        }
    }
    if (x <= 1) {
        newNumber[newNumber.length] = number3[i];
    }
}
console.log(newNumber);
// bai4
console.log("Bài 4");
var numbers = [5, 1, 9, 8, 10];
var element = 4;

function arrange(x) {
    if (Array.isArray(x)) {
        for (let i = 0; i < x.length; i++) {
            for (let j = i; j < x.length; j++) {
                if (x[i] > x[j]) {
                    let temp = x[i];
                    x[i] = x[j];
                    x[j] = temp;
                }
            }
        }
        console.log(x);
    } else {
        console.log("Không phải arr");
    }
}
function insert(x, arr) {
    if (Array.isArray(arr)) {
        arr[arr.length] = x;
        arrange(arr);
    } else {
        console.log("Không phải arr");
    }
}
// Bước 1
arrange(numbers);
// Bước 2
insert(element, numbers);
