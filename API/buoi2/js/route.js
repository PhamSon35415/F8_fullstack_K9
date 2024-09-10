const router = new Navigo("/");

router.on(
    "/",
    () => {
        console.log("home");
    },
    "/about",
    () => {
        console.log("about");
    }
);
