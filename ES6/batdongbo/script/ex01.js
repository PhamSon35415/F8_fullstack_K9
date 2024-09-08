const getUser = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                {
                    id: 1,
                    name: "John",
                    salary: 1000,
                },
                {
                    id: 2,
                    name: "John 2",
                    salary: 1000,
                },
                {
                    id: 3,
                    name: "John 3",
                    salary: 2000,
                },
            ];
            const user = users.find((user) => user.id === userId);
            resolve(user);
        }, Math.random() * 1000);
    });
};

let ids = [1, 2, 3];
var sum = 0;

const promises = ids.map((id) => {
    return getUser(id);
});
console.log(promises);
Promise.all(promises).then((data) => {
    data.forEach((value) => {
        sum += value.salary;
    });
    console.log(sum);
});
// setTimeout(() => {
//     console.log(sum);
// }, 1000);

// const totalSalary = () => {
//     let count = 0;
//     const salary = ids.map(async (id) => {
//         let user = await getUser(id);
//         return user.salary;
//     });
//     console.log(salary);
// };
// totalSalary();
// console.log(sum);

// const totalSalary = new Promise((resolve) => {
//     let count = 0;
//     var sum = 0;
//     ids.forEach((id) => {
//         getUser(id).then((user) => {
//             sum += user.salary;
//             count += 1;
//             if (count === ids.length) {
//                 resolve(sum);
//             }
//         });
//     });
// });
// totalSalary.then((data) => {
//     console.log(data);
// });
// console.log(sum);
