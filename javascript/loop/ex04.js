// while(dk){khối lệnh}
var n = 1000;
var x = 0;
while (n % 2 === 0) {
    n /= 2;
    x++;
    // console.log(n);
}
console.log(x, n);
var i = 0;
do {
    // console.log(i);
    i++;
} while (i < 10);
// break: thoát vòng lặp khi chưa kết thúc
// continue: bỏ qua vo
for (var i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        continue;
    }
}
