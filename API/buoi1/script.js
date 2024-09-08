const postsEndPoint = "http://localhost:3000/posts";
const commentsEndPoint = "http://localhost:3000/comments";
const userEndPoint = "http://localhost:3000/user";
function getUser() {
    return fetch(userEndPoint);
}
function getComment() {
    return fetch(commentsEndPoint);
}
function getPoint() {
    return fetch(postsEndPoint);
}
let main = () => {
    // try {
    // const response = await fetch(userEndPoint);
    // const response1 = await fetch(commentsEndPoint);
    // const response2 = await fetch(postsEndPoint);

    //     console.log(await response.json());
    //     console.log(await response1.json());
    //     console.log(await response2.json());
    // } catch (e) {
    //     console.log(e);
    // }
    Promise.all([getUser(), getComment(), getPoint()]).then((data) => {
        console.log(data);
    });
};
main();
