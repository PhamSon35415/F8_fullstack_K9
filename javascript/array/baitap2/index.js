console.log("Bài 1");
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrC = [];
for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
            arrC.push(arrA[i]);
        }
    }
}
console.log(arrC);
//
console.log("Bài 2");
var result = [];
function lamphang(arr) {
    for (const element of arr) {
        if (Array.isArray(element)) {
            lamphang(element);
        } else {
            result.push(element);
        }
    }
    return result;
}
//
console.log("Bài 3");
var arr1 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flatArr = lamphang(arr1);
console.log(flatArr);
var arr2 = [["a", 1, true], ["b", 2, false], 7];
var resultArr = [];
var test = "";
function dulieu(arr) {
    for (const element of arr) {
        if (Array.isArray(element)) {
            dulieu(element);
        } else {
            if (!test.includes(typeof element)) {
                test += typeof element;
                resultArr.push([]);
            }

            if (typeof element === "string") {
                resultArr[0].push(element);
            } else if (typeof element === "number") {
                resultArr[1].push(element);
            } else if (typeof element === "boolean") {
                resultArr[2].push(element);
            }
        }
    }
}
//
console.log("Bài 4");
dulieu(arr2);
console.log(resultArr);
var content = "";
var img =
    "https://fastly.picsum.photos/id/37/600/600.jpg?hmac=svoKeiIO7rZg-rv5gvxPiIrWs8xjoDbvL1CLmlV-xKU";
var h1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit";
var h2 =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis optio, laudantium quo,voluptate natus excepturi culpa dolores, expedita est rerum nihil provident? Consequatur ex quasi,                    accusamus labore rem amet.";
var solg = 4;
for (let i = 0; i < solg; i++) {
    content += `<div class="content-item">
            <img src="${img}"
                alt="">
            <div>
                <h2>${h1} ${i + 1}</h2>
                <p>${h2}</p>
            </div>
        </div>`;
}
document.getElementsByClassName("container")[0].innerHTML = content;
