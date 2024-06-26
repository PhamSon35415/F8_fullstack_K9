// vòng lặp
// loại 1:  với số vòng lặp xác dịnh trước : for
// loại 2: lặp với số vòng lặp không biết trước: while,do while
//  for(var i;i<10;i++)
// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }
// vòng lặp lồng nahu
// for (var i = 1; i <= 5; i++) {
//     for (var j = 0; j < 10; j++) {
//         document.write(j);
//     }
// }
// var n = 10,
//     sum = 0;
// for (var i = 1; i <= n; i++) {
//     sum += i;
// }

//
// var n = 5,
//     x = 1;
// for (var i = 2; i <= n; i++) {
//     x *= i;
// }

// var n = 5,
//     x = 0,
//     y = 1;
// for (var i = 1; i <= n; i++) {
//     y *= i;
//     x += y;
// }
// console.log(x);

var n = 12;
var check = true;
if (n > 0) {
    if (n % 1 === 0) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log("Là số nguyên tố");
        } else {
            console.log("Không là số nguyên tố");
        }
    } else {
        console.log("Không phải số nguyên");
    }
} else {
    console.log("Số phải lớn hơn 0");
}
