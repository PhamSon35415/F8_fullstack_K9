const getUser = (userId) => {
    return new Promise((resolve, reject) => {
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
                {
                    id: 4,
                    name: "John 3",
                    salary: 2000,
                },
            ];

            const user = users.find((user) => user.id === userId);
            if (!user) {
                reject("User not found");
            } else {
                resolve(user);
            }
        }, Math.random() * 1000);
    });
};

// const main = async () => {
//     try {
//         const x = await getUser(4);
//         console.log(x);
//     } catch (e) {
//         console.log(`Error: ${e}`);
//     }
// };
let getOne = () => {
    return getUser(5);
};
let getOne2 = () => {
    return getUser(1);
};

const main2 = () => {
    let user1 = getOne();
    let user2 = getOne2();
    let user3 = getOne2();
    Promise.all([user1, user2, user3])
        .then((data) => {
            console.log(data);
        })
        .catch((e) => {
            console.log("Error:", e);
        });
};

main2();
