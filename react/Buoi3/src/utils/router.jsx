import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Home, Products, Categories } from "../pages";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/products",
        element: <Products />,
    },
]);
