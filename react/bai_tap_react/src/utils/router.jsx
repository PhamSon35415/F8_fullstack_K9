import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { Product } from "../components/index.js";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Product />,
    },
]);
