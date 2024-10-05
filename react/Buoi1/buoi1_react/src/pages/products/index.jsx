import { FCommonTable } from "../../components";
import { useEffect, useState } from "react";
import { ProductDialog } from "../../components";
import { v4 } from "uuid";

export default function () {
    const [showDialog, setShowDialog] = useState(false);
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState({
        id: v4(),
        name: "",
        categoryId: 1,
        orderNum: 1,
    });
    const columns = [
        {
            text: "Id",
            name: "id",
        },
        {
            text: "Name",
            name: "name",
        },
        {
            text: "Category",
            name: "categoryId",
        },
        {
            text: "Order Number",
            name: "orderNum",
        },
        {
            text: "",
            name: "action",
        },
    ];
    const getProducts = async () => {
        const reponse = await fetch("http://localhost:3000/products");
        setProducts(await reponse.json());
    };
    useEffect(() => {
        getProducts();
    }, []);
    const onEdit = (product) => {
        setCheck(true);
        setShowDialog(true);
        setCheck1(product);
        console.log(product);
    };

    const onCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
            <span>products</span>
            <FCommonTable
                maxWidth={1000}
                columns={columns}
                rows={products}
                onEdit={onEdit}
            />
            <ProductDialog
                item={check1}
                show={showDialog}
                onClose={onCloseDialog}
                width={600}
                reload={getProducts}
                check={check}
            />
        </>
    );
}
