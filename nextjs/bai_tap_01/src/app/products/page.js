// "use client";
import { ListProduct } from "@/app/components";
export const products = [
    {
        id: "1",
        name: "Product1",
        description: "Sản phẩm đầu tiên",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "2",
        name: "Product 2",
        description: "Sản phẩm Thứ 2",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "3",
        name: "Product 3",
        description: "Sản phẩm Thứ 3",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "4",
        name: "Product 4",
        description: "Sản phẩm Thứ 4",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "5",
        name: "Product 5",
        description: "Sản phẩm Thứ 5",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "6",
        name: "Product 6",
        description: "Sản phẩm Thứ 6",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
    {
        id: "7",
        name: "Product 7 ",
        description: "Sản phẩm Thứ 7",
        oldPrice: 10000,
        newPrice: 100,
        image: "https://i.pinimg.com/564x/70/68/4b/70684b869f68c393e4997ee8dce78abc.jpg",
    },
];
export default function () {
    return (
        <>
            <ListProduct products={products} />
        </>
    );
}
