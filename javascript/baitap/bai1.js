function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
//F(n)=F(n−1)+F(n−2)  F(0)=0,F(1)=1
let n = 10;
for (let i = 0; i < n; i++) {
    console.log(`Số thứ ${i + 1}: ${fibonacci(i)}`);
}
// bai2
console.log("Bài 2");
function daonguoc(n) {
    var reversed = 0;
    while (n != 0) {
        var x = n % 10;
        reversed = reversed * 10 + x;
        n = Math.floor(n / 10);
    }
    return reversed;
}
console.log(daonguoc(12345));
// bài 3
console.log("bài 3");
function docso(x) {
    let listso = [
        "không",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    if (x > 0 && x < 10000) {
        if (x === 0) {
            return "không";
        }

        let result = "";
        let nghin = Math.floor(x / 1000);
        let tram = Math.floor((x % 1000) / 100);
        let chuc = Math.floor((x % 100) / 10);
        let donvi = x % 10;

        if (nghin > 0) {
            result += listso[nghin] + " nghìn ";
        }
        if (tram > 0) {
            result += listso[tram] + " trăm ";
        }
        if (chuc > 0) {
            if (chuc === 1 && donvi !== 0) {
                result += "mười " + listso[donvi];
            } else {
                result += listso[chuc] + " mươi ";
                if (donvi > 0) {
                    if (donvi === 1) {
                        result += "mốt";
                    } else {
                        result += listso[donvi];
                    }
                }
            }
        } else if (donvi > 0) {
            result += "lẻ " + listso[donvi];
        }
        return result;
    }
    return "Số nằm ngoài khoảng 1-9999";
}

// Example usage:
let number = 8231;
let words = docso(number);
console.log(`Số ${number} chuyển thành: ${words}`);
