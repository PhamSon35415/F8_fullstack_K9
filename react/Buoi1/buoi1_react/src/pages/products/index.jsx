import { useEffect, useState } from "react";
import { ProductDialog, FCommonTable } from "../../components";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

export default function () {
    const [showDialog, setShowDialog] = useState(false);
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState({});
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
        const response = await fetch("https://jlny6y-8080.csb.app/products");
        setProducts(await response.json());
    };
    useEffect(() => {
        getProducts();
    }, []);
    const onEdit = (product) => {
        console.log("ok");
        setCheck1(product);
        setCheck(true);
        setShowDialog(true);
    };

    const onCloseDialog = () => {
        setShowDialog(false);
    };
    const onDelete = async (data) => {
        const result = await Swal.fire({
            title: `Bạn có chăc muốn xóa :${data.name} không ?`,
            text: "Không khôi phục đươc đâu suy nghĩ cho chắc !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Có, xóa nó !",
            cancelButtonText: "Thôi",
        });

        if (result.isConfirmed) {
            const url = `https://jlny6y-8080.csb.app/products/${data.id}`;
            try {
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    await getProducts();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Ok ! Đã Xóa .",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Lỗi!",
                        text: "Lỗi rồi xem lại đi !",
                        icon: "error",
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Lỗi!",
                    text: "Lỗi rồi xem lại đi !",
                    icon: "error",
                });
            }
        }
    };
    const onAdd = () => {
        setShowDialog(true);
    };

    return (
        <>
            <div className={"btn-center"}>
                <h1>Products</h1>
                <Button variant="contained" onClick={onAdd}>
                    Thêm sản phẩm
                </Button>
            </div>
            <FCommonTable
                maxWidth={1200}
                columns={columns}
                rows={products}
                onUpdate={onEdit}
                onDelete={onDelete}
            />
            <ProductDialog
                productItem={check1}
                show={showDialog}
                onClose={onCloseDialog}
                width={600}
                reload={getProducts}
                check={check}
            />
        </>
    );
}
