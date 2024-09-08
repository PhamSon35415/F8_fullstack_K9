// function learning(callback1) {
//     setTimeout(function () {
//         console.log("learnig");
//         callback1();
//     });
// }
// function finishedLearning(callback1) {
//     setTimeout(function () {
//         console.log("finishedLearning");
//         callback1();
//     }, 200);
// }
// function working(callback1) {
//     setTimeout(function () {
//         console.log("working");
//         callback1();
//     }, 100);
// }
// function takeSaraly() {
//     setTimeout(function () {
//         console.log("working");
//     }, 100);
// }
// // learning(finishedLearning, working);
// learning(function () {
//     finishedLearning(function () {
//         working(function () {
//             takeSaraly();
//         });
//     });
// });
// console.log("nhd");

// const learning1 = () => {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole(learning2);
//         }, 2000);
//     });
// };
// const learning2 = () => {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("okla");
//         }, 2000);
//     });
// };
// learning1()
//     .then((data) => {
//         console.log(data);
//         return "vubhinjmkl,;";
//     })
//     .then((data) => {
//         console.log(data);
//         // return "vubhinjmkl,;";
//     })
//     .catch((data) => {
//         console.log(data);
//     })
//     .finally(() => {
//         console.log("finally");
//     });
