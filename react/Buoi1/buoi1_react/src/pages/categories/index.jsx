import { useState, useEffect, createContext } from "react";
import { FCommonTable, CategoryDialog, LoadingSpinner } from "../../components";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

export const dataCategory = createContext();

export default function () {
    const [loading, setLoading] = useState(false);
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
        setLoading(true);
        try {
            const response = await fetch(
                "https://jlny6y-8080.csb.app/categories"
            );
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

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
                const productsResponse = await axios.get(
                    "https://jlny6y-8080.csb.app/products"
                );
                const products = productsResponse.data;
                const productsToUpdate = products.filter(
                    (product) => product.categoryId === data.id
                );

                if (productsToUpdate.length > 0) {
                    for (const product of productsToUpdate) {
                        const updatedProduct = { ...product, categoryId: "0" };
                        await axios.patch(
                            `https://jlny6y-8080.csb.app/products/${product.id}`,
                            updatedProduct,
                            {
                                headers: { "Content-Type": "application/json" },
                            }
                        );
                    }
                }

                const response = await axios.delete(url, {
                    headers: { "Content-Type": "application/json" },
                });

                if (response.status === 200) {
                    setCategories((prevCategories) =>
                        prevCategories.filter((item) => item.id !== data.id)
                    );
                    Swal.fire({
                        title: "Deleted!",
                        text: "Ok! Đã Xóa.",
                        icon: "success",
                    });
                }
            } catch (error) {
                console.error("Error:", error);
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

            {loading ? (
                <LoadingSpinner loading={loading} size={50} color="#1976d2" />
            ) : (
                <>
                    <FCommonTable
                        maxWidth={1000}
                        columns={columns}
                        rows={categories}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                    <CategoryDialog
                        category={category}
                        check={check}
                        show={showDialog}
                        onClose={onCloseDialog}
                        width={600}
                        setCategories={setCategories}
                    />
                </>
            )}
        </>
    );
}
