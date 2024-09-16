const app = document.querySelector("#app");
console.log(app);

const render = (position, content) => {
    position.innerHTML = content();
};
import Navigo from "navigo";
import "./style.css";
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductsPage";
import ProductDetail from "./src/pages/ProductDetail";
const getPost = async (endPoint) => {
    try {
        const data = await fetch();
    } catch (error) {}
};

const router = new Navigo("/", { linksSelector: "a" });
router.on("/", () => {
    render(app, HomePage);
});
router.on("/products", () => {
    render(app, ProductPage);
});
router.on("/product-detail/:id", (data) => {
    render(app, () => ProductDetail(data));
});
router.notFound(() => {
    render(app, () => {
        return `404`;
    });
});
/**
 * localStorage
 * sessionStorage
 * cookie
 *
 * Khác nhau :
 * cookie có thể dc gen ra từ client , server
 * local :Vĩ viễn
 * session: cho đến khi trình đuyệt tắt
 * cookie : tùy vào dev
 *
 * Thao tác server
 * local :Không
 * session: Không
 * cookie : tự giử qua header
 *
 * dung lượng
 * cookie: lưu dc 4 kb
 * local : 5MB
 * session: 5MB
 *
 * truy cập
 *  cookie : có thể truy cập từ client (bất kỳ từ tap nào)
 * local,session: chỉ trong tap  đó
 */
router.resolve();
