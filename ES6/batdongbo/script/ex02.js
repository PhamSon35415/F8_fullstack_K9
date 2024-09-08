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
                    salary: 4000,
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

const promises = ids.map((id) => {
    return getUser(id);
});
var max = 0;
let maxSalary = "";
Promise.all(promises).then((data) => {
    data.forEach((user) => {
        if (user.salary > max) {
            max = user.salary;
            maxSalary = user.name;
        }
    });
    console.log(maxSalary);
});
