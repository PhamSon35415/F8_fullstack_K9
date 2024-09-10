const router = new Navigo("/");

const app = document.getElementById("app");

router.on({
    "/": () => {
        renderUser();
    },
    "/about": () => {
        app.innerHTML = "About Us Page!";
        console.log("About Page");
    },
    "/user/:id": ({ data }) => {
        const { id } = data;
        renderUserForm(id);
    },
});
