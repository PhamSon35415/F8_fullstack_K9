// bài 3
Array.prototype.push2 = function (...args) {
    for (const item of args) {
        this[this.length] = item;
    }
    return this.length;
};
var arr = [1, 2, 3, 4, 5, 6];
var newarr = arr.push2(7, 8, 9, 10, 11, 12);
console.log(arr);
console.log(newarr);
//
// Bài 2
Array.prototype.filter2 = function (callback) {
    if (typeof callback !== "function") {
        return null;
    }
    var output = [];
    for (const index in this) {
        if (callback(this[index], index, this)) {
            output.push(this[index]);
        }
    }
    return output;
};
var testfiter = arr.filter2(function (value) {
    return value % 2 === 0;
});
console.log(testfiter);

// Bài 3
var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        children: [
            {
                id: 4,
                name: "Chuyên mục 2.1",
            },
            {
                id: 5,
                name: "Chuyên mục 2.2",
                children: [
                    {
                        id: 10,
                        name: "Chuyên mục 2.2.1",
                    },
                    {
                        id: 11,
                        name: "Chuyên mục 2.2.2",
                    },
                    {
                        id: 12,
                        name: "Chuyên mục 2.2.3",
                    },
                ],
            },
            {
                id: 6,
                name: "Chuyên mục 2.3",
            },
        ],
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        children: [
            {
                id: 7,
                name: "Chuyên mục 3.1",
            },
            {
                id: 8,
                name: "Chuyên mục 3.2",
            },
            {
                id: 9,
                name: "Chuyên mục 3.3",
            },
        ],
    },
];

function selectOption(list, prefix = "") {
    let options = "";
    for (let item of list) {
        options += `<option value="${item.id}">${prefix}${item.name}</option>`;
        if (item.children) {
            options += selectOption(item.children, prefix + "--|");
        }
    }
    return options;
}

const category = document.getElementById("category");

category.innerHTML += selectOption(categories);
