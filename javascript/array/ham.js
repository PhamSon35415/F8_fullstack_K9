// console.log(Array.prototype);
// var users = ["User 1", "User 2", "User 3", "User 4", "User 2"];
// console.log(users);

//Chaining: object.method1().method2().method3()

//1. at(index) ==> Lấy phần tử dựa vào index
// console.log(users.at(0));

//2. concat(arr1, arr2,...) ==> Nối các array thành 1 array
// console.log(users.concat([1, 2, 3], [4, 5, 6], ["A", "B", "C"]));
// console.log(users.concat("User 5"));

//3. fill(value) ==> Cập nhật các phần tử thành 1 giá trị
// var result = users.fill(0);
// console.log(users);
// console.log(result);

//4. includes(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về true / false)
// console.log(users.includes("User 1"));

//5. indexOf(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về index đầu tiên tìm được)
// console.log(users.indexOf("User 22"));

//6. lastIndexOf(value) ==> Kiểm tra phần tử có trong mảng không? (Trả về index cuối cùng tìm được)
// console.log(users.lastIndexOf("User 2"));

//7. slice(start, end) ==> Cắt mảng từ start đến end - 1 (Trả về mảng mới)
// console.log(users.slice(0, 2));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//8. join() ==> Nối các phần tử trong mảng thành chuỗi
// console.log(users.join(" - "));
// var fullname = "Tạ Hoàng An";
// var firstName = fullname.split(" ").slice(-1).join();
// console.log(firstName);

//9. reverse() ==> Đảo ngược mảng (Thay đổi mảng ban đầu)
// console.log(users.reverse());
// console.log(users);

//10. sort() ==> Sắp xếp mảng theo thứ tự tăng dần (Kiểm tra theo ký tự)
// var users = ["Dũng", "An", "Tâm", "Văn"];
// users.sort();
// console.log(users);
var numbers = [2, 100, 1, 8];
// console.log("Mảng ban đầu");
// console.log(numbers);
numbers.sort(function (a, b) {
    /*
  a: Phần tử sau
  b: Phần tử trước
  Nếu hàm này return về giá trị âm ==> Tự động đổi chỗ a và b
  */
    //   console.log(b);
    //   console.log(a);
    //   console.log("---");
    //   if (a > b) {
    //     return -1;
    //   }
    return b - a;
});
// console.log(numbers);

//Lần 1: [2, 100, 1, 8]
//Lần 2: [2, 1, 100, 8]
//Lần 3: [1, 2, 100, 8]
//Lần 4: [1, 2, 8, 100]
//Lần 5: [1, 2, 8, 100]

// var number2 = [2, 100, 1, 8];
// for (var i = 0; i < numbers.length - 1; i++) {
//   for (var j = i + 1; j < numbers.length; j++) {
//     console.log(number2[i], number2[j]);
//     if (number2[i] > number2[j]) {
//       var tmp = number2[i];
//       number2[i] = number2[j];
//       number2[j] = tmp;
//     }
//   }
// }

//Hàm sort sử dụng thuật toán Merge Sort

var customers = [
    "Tạ Hoàng An",
    "Phan Văn Hiếu",
    "Nguyễn Tuấn Anh",
    "Nguyễn Văn Tuấn",
    "Nguyễn Văn Tùng",
];
//Sắp xếp mảng customers theo thứ tự tăng dần (Sắp xếp theo tên)
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function (a, b) {
//   if (getFirstName(b) > getFirstName(a)) {
//     return -1;
//   }
// });
// console.log(customers);

//Nguyễn Xuân Tuấn Anh
//Tạ Hoàng Anh

//Bài tập 2: Thêm 1 khách hàng vào giữa mảng customers (Sau khi đã sắp xếp ở bài 1)
// var newCustomer = "Lê Đức Nam";
// var index = (customers.length - (customers.length % 2)) / 2;
// var firstArr = customers.slice(0, index);
// var lastArr = customers.slice(index);
// var customers = firstArr.concat(newCustomer, lastArr);
// console.log(customers);

// var a = 7;
// var b = 2;
// var result = (a - (a % b)) / b;
// console.log(result);

// var fullname = "Tạ     Hoàng  An";
// fullname = fullname.split(" ");
// var fullnameArr = [];
// for (var value of fullname) {
//   if (value) {
//     fullnameArr[fullnameArr.length] = value;
//   }
// }
// fullname = fullnameArr.join(" ");
// console.log(fullname);

//11. push() ==> Thêm phần tử vào cuối mảng
// var count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

//12. unshift() ==> Thêm phần tử vào đầu mảng
// var count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

//13. pop() ==> Xóa phần tử cuối mảng
// var value = users.pop();
// console.log(users);
// console.log(value);

//14. shift() ==> Xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users);
// console.log(value);

//15. splice(index, count) ==> Xóa count phần tử từ index
// var result = users.splice(1, 0, "Item 1", "Item 2", "Item 3", "Item 4");
// console.log(users);
// console.log(result);

//16. length ==> Lấy độ dài
// var arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// arr.length = 2;
// console.log(arr);

//Vòng lặp mảng
// var users = ["User 1", "User 2", "User 3", "User 4"];
// console.log(users);
//1. forEach(callback)
// - Duyệt qua từng phần tử của mảng và trả kết quả vào callback
// - Callback có 2 tham số: value, index
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//2. map(callback)
// - Duyệt qua từng phần tử của mảng trả về value, index ở callback
// - Trả về 1 mảng mới có số lượng phần tử bằng mảng ban đầu
// - Giá trị các phần tử của mảng mới là giá trị của callback (Callback return về giá trị nào ==> Lưu vào mảng mới)
// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//3. filter(callback)
// - Duyệt qua từng phần tử của mảng ban đầu
// - Trả về 1 mảng mới, giá trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback trả về truthy
// console.log("x");
// var numbers = [0, 1, 3, 5, 7, 8, 9];
// console.log(numbers);
// var newArr = numbers.filter(function (value, index) {
//     // return value % 2 !== 0;
//     // return false;
//     return value;
// });
// console.log(newArr);

// var fullname = "Tạ    Hoàng   An";
// var newName = fullname
//   .split(" ")
//   .filter(function (item) {
//     return item;
//   })
//   .join(" ");
// console.log(newName);

//Bài tập: Xóa khách hàng có email là: customer2@gmail.com

// var customers = [
//     ["Customer 1", "customer1@gmail.com", 32],
//     ["Customer 2", "customer2@gmail.com", 28],
//     ["Customer 3", "customer3@gmail.com", 31],
//     ["Customer 4", "customer4@gmail.com", 29],
// ];
// console.log(customers);
// customers = customers.filter(function (customer) {
//     return !customer.includes("customer2@gmail.com");
// });

// console.log(customers);

//Bài tập 2: Tăng tuổi của customer: customer2@gmail.com thêm 2 tuổi
//Gợi ý: Dùng map
// customers = customers.map(function (customer) {
//   if (customer.includes("customer2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(customers);

//Bài tập 3:
// var users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// console.log(users);
// //Yêu cầu: Xóa phần tử trùng
// var newUsers = [];
// users.forEach(function (user) {
//   if (!newUsers.includes(user)) {
//     newUsers.push(user);
//   }
// });

// every(callback)
// Duyệt qua từng phần tử cho đến khi tất cả phải trả về true
// Nếu có 1 phần tử trả về false thì kết thúc và trả về false
const arr = [1, 3, 5, 6, 7, 10];
// const result = arr.every((item) => item > 5);
var status = arr.every(function (number) {
    return number % 2 === 0;
});
console.log(status);
// find(callback)
// Duyệt qua từng phần tử cho đến khi tìm thấy 1 phần tử trả về true
// Nếu không tìm thấy thì trả về undefined
// Lấy phần tử đầu thỏa mãn
const arr1 = [1, 3, 5, 6, 7, 10];
const result = arr1.find(function (new1) {
    return new1 > 5;
});
// findlast
// Duyệt ngược lại từng phần tử cho đến khi tìm thấy 1 phần tử trả về true
// Nếu không tìm thấy thì trả về undefined
// Lấy phần tử cuối thỏa mãn
// findindex(callback)
// Duyệt qua từng phần tử cho đến khi tìm thấy 1 phần tử trả về true
// Nếu không tìm thấy thì trả về -1

// findlastIndex(callback)
// Duyệt ngược lại từng phần tử cho đến khi tìm thấy 1 phần tử trả về true
// Nếu không tìm thấy thì trả về -1
var x = arr1.findIndex(function (numberx) {
    return numbers > 2;
});
console.log(x);
var ar1 = [1, 2, 3, 4, 5, 6, 7];
var ar2 = [2, 0, 0, 9, 3, 1, 9];
var newarr = [];
var result1 = ar1.find(function (item) {
    if (ar2.includes(item)) {
        newarr.push(item);
    }
});
console.log(newarr);
var data = [];
var addData = function (value, status) {
    if (status) {
        if (!data.includes(value)) {
            data.push(value);
        }
    } else {
        data = data.filter(function (user) {
            return user !== value;
        });
    }
};

addData("Son", true);
addData("Son", true);
addData("Duc", true);
addData("An", true);
addData("An 2", true);
addData("An", false);
// addData("Duc", false);
console.log(data);
// reduce(callback,initialvalue)
/**
 * Cllaback có 4 tham số chủ yêu sllamf việc với 3 tham số
 * - PrevValue
 * - currentValue
 * - index
 * initialvalue: giá trị khởi tạo
 *
 * cách hoạt động
 * 1. không có initialvalue (không có thM SỐ THỨ 2)
 * - vòng lặp reduce sẽ chạy từ phần tử thứ 2 đến hết
 * - PrevValue của phần tử đùa tiên chính là phần tử đầu của mảng
 * - currentValue là giá trị của từng phận tử khi lặp
 * - PrevValue của lần lặp sau sẽ là return của phần tử trc
 * - giá trị của hàm là return cuối cùng của callback
 *
 * 2. có initialvalue
 * Vòng lặp reduce sẽ chạy từ phần tử thứ nhất
 * PrevValue của phần tử đùa tiên chính là initialvalue
 * các trường hợp sau giống nhau
 */

// var sum = number.reduce(function (prevValue, currentValue, index) {
//     console.log(
//         `prevValue ${prevValue} currentValue ${currentValue} index ${index}`
//     );

//     return currentValue;
// });
// var max = number.reduce(function (prev, current) {
//     if (prev > current) {
//         return prev;
//     }
//     return current;
// });
// console.log(`Max=${max}`);
var users = ["Nam", "Sơn", "Ly", "Sơn", "Nam", "An", "My", "Ly", "Mai", "An"];
var newUsers = users.reduce(function (prev, current) {
    // console.log(`prevValue ${prev} currentValue ${current}`);
    if (!prev.includes(current)) {
        prev.push(current);
    }
    return prev;
}, []);
console.log(newUsers);
console.log(x);
function numberflat(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            numberflat(item);
        } else {
            return item;
        }
    }
}
var numbers = [1, [2, 3], [4], 5, [[6, 7]], [[[[8]], 9]]];
// var sum = numbers.reduce(function (prevValue, currentValue, index) {
//     console.log(
//         `prevValue ${prevValue} currentValue ${currentValue} index ${index}`
//     );

//     return currentValue;
// });
// var flat = function (arr) {
//     return arr.reduce(function (prev, current) {
//         if (!Array.isArray(current)) {
//             return prev.concat(current);
//         }
//         return prev.concat(flat(current));
//     }, []);
// };
// console.log(flat(numbers));
var number = [1, 9, 3, 10, 5, -6, 1, 2, 3, 4, 5];
// chunk Array
var size = 3;
var chunk = number.reduce(
    function (prev, current) {
        if (prev[prev.length - 1].length < size) {
            prev[prev.length - 1].push(current);
        } else {
            prev.push([current]);
        }
        return prev;
    },
    [[]]
);
console.log(chunk);
