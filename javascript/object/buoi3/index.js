//

// var queryString1 =
//     "status=active&keyword=ahihi&category=1&category=2&category=3";
// var newob = {};
// var ob = queryString1.split("&").reduce(function (prev, curr) {
//     var test = curr.split("=");
//     var key = test[0];
//     var value = test[1];
//     if (!prev[key]) {
//         prev[key] = value;
//     } else {
//         if (!Array.isArray(prev[key])) {
//             prev[key] = [prev[key]];
//         }
//         prev[key].push(value);
//     }

//     return prev;
// }, {});
// console.log(ob);
var a = {
    name: "Pham Son",
    email: "Pham@gmail.com",
};
// var b=a;
// var b=Object.assign({},a)
// var b={...a}
var b = JSON.parse(JSON.stringify(a));
b.name = "Ok la";
console.log(a);
console.log(b);

// Optional Chaining (?.) với thuộc tính
var user = null;
console.log(user?.name); // undefined
// Optional Chaining (?.) với phương thức
var user1 = function () {};
user?.getName?.();
