import { useState, useEffect, createContext } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { FormCategory, Table } from "../../components";
export const dataCategory = createContext();
export default function () {
    const [showDialog, setShowDialog] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({});
    const [check, setCheck] = useState(false);
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
            text: "Order Number",
            name: "orderNum",
        },
        {
            text: "",
            name: "action",
        },
    ];
    const getCategories = async () => {
        const response = await fetch("https://jlny6y-8080.csb.app/categories");
        const data = await response.json();
        setCategories(data);
    };
    const sortCategories = categories.sort((a, b) => {
        return Number(a.orderNum) - Number(b.orderNum);
    });
    useEffect(() => {
        getCategories();
    }, []);

    const onUpdate = (data) => {
        setCategory(data);
        setCheck(true);
        setShowDialog(true);
    };
    const onAdd = () => {
        setShowDialog(true);
    };

    const onCloseDialog = () => {
        setShowDialog(false);
        setCheck(false);
    };

    const onDelete = async (data) => {
        const result = await Swal.fire({
            title: `Bạn có chắc muốn xóa danh mục này không?`,
            text: "Không khôi phục được đâu, suy nghĩ cho chắc!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Có, xóa nó!",
            cancelButtonText: "Thôi",
        });

        if (result.isConfirmed) {
            const url = `https://jlny6y-8080.csb.app/categories/${data.id}`;

            try {
                const productsResponse = await fetch(
                    "https://jlny6y-8080.csb.app/products"
                );
                const products = await productsResponse.json();
                const productsToUpdate = products.filter(
                    (product) => product.categoryId === data.id
                );
                if (productsToUpdate.length > 0) {
                    for (const product of productsToUpdate) {
                        const updatedProduct = {
                            ...product,
                            categoryId: "0",
                        };
                        await fetch(
                            `https://jlny6y-8080.csb.app/products/${product.id}`,
                            {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(updatedProduct),
                            }
                        );
                    }
                }
                const response = await fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    await getCategories();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Ok! Đã Xóa.",
                        icon: "success",
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Lỗi!",
                    text: "Có lỗi xảy ra, vui lòng thử lại!",
                    icon: "error",
                });
            }
        }
    };

    return (
        <>
            <div className="btn-center">
                <h1>Categories</h1>
                <Button variant="contained" onClick={onAdd}>
                    Thêm danh mục
                </Button>
            </div>
            <Table
                maxWidth={1000}
                columns={columns}
                rows={sortCategories}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
            <FormCategory
                category={category}
                check={check}
                show={showDialog}
                onClose={onCloseDialog}
                width={600}
                reload={getCategories}
            />
        </>
    );
}
