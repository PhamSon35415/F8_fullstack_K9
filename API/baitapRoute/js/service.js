const getUsers = async () => {
    const users = await getMethod("user");
    return users;
};
const onEditOrCreate = (id = null) => {
    router.navigate(`/user/${id ? id : "0"}`);
};
const getUser = async (id) => {
    const user = await getMethod(`user/${id}`);
    return user;
};
const onSave = async (even, id = null) => {
    even.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const age = document.getElementById("age").value;
    const body = {
        name,
        mail,
        age,
    };
    let newuser = null;
    if (!id) {
        newuser = await putMethod(`user/${id}`, body);
    } else {
        newuser = await putMethod(`user`, body);
    }
    console.log(body);
    router.navigate("/");
};
