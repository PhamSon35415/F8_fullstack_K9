var n = 7;
for (let i = n; i >= n; i++) {
    if (reverseNumber(i) && snt(i)) {
        console.log(
            `Số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng ${n} là: ${i}`
        );
        break;
    }
}
function snt(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
function reverseNumber(num) {
    const x = num.toString();
    const y = x.split("").reverse().join("");
    return x === y;
}
// bai 2
var nums1 = [5],
    nums2 = [2];
var nums0 = nums1.concat(nums2).sort();
var result = 0;
if (nums0.length % 2 === 0) {
    result = (nums0[nums0.length / 2 - 1] + nums0[nums0.length / 2]) / 2.0;
} else {
    result = nums0[nums0.length / 2 - 0.5];
}
console.log(`Trung vị của mảng {${nums0}}: ${result}`);

// Bai 3
var nums3 = [4, 5, 6],
    nums4 = [7, 8];
var nums = nums3.concat(nums4);
function maxarr(x) {
    if (Array.isArray(x)) {
        var max = x[0];
        for (let i = 0; i < x.length; i++) {
            if (max < x[i]) {
                max = x[i];
            }
        }
        return max;
    }
}
var check = false;
var number = -1;
for (let i = 1; i < maxarr(nums); i++) {
    if (!nums.includes(i)) {
        number = i;
        check = true;
        break;
    }
}
if (!check) {
    number = maxarr(nums) + 1;
}
console.log(`Số nguyên dương nhỏ nhất không có trong {${nums}} la: ${number}`);
