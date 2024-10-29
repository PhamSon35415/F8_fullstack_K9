import React, { useEffect, useState } from "react";
import DialogContainers from "../DialogContainers";
import {
    TextField,
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import axios from "axios";

function WhiteBar() {
    return (
        <Box
            sx={{
                height: 20,
                backgroundColor: "#fff",
            }}
        />
    );
}

export default function ({
    show,
    onClose,
    width,
    setProducts,
    check,
    productItem,
}) {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({
        id: v4(),
        name: "",
        categoryId: 1,
        orderNum: 1,
    });
    const [categories, setCategories] = useState([]);
    const onExit = () => {
        onClose();
        setProduct({ id: v4(), name: "", categoryId: 1, orderNum: 1 });
    };
    useEffect(() => {
        if (check && productItem) {
            setProduct(productItem);
        }
        getCategories();
    }, [check, productItem]);
    const [errors, setErrors] = useState({
        name: false,
        orderNum: false,
    });
    const validate = () => {
        let tempErrors = { name: false, orderNum: false };
        let isValid = true;

        if (!product.name) {
            tempErrors.name = true;
            isValid = false;
        }

        if (!product.orderNum || isNaN(product.orderNum)) {
            tempErrors.orderNum = true;
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const getCategories = async () => {
        try {
            const response = await fetch(
                "https://jlny6y-8080.csb.app/categories"
            );
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const onInput = (e) => {
        const newProduct = { ...product };
        newProduct[e.target.name] = e.target.value;
        setProduct(newProduct);
    };
    const onSave = async () => {
        if (validate()) {
            const url = check
                ? `https://jlny6y-8080.csb.app/products/${product.id}`
                : "https://jlny6y-8080.csb.app/products";
            const method = check ? "patch" : "post";
            setLoading(true);
            try {
                await axios({
                    method,
                    url,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: product,
                });
                setProducts((x) => {
                    if (check) {
                        return x.map((item) =>
                            item.id === product.id ? product : item
                        );
                    } else {
                        return [...x, product];
                    }
                });

                onExit();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Lưu thành công",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Lưu thất bại",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <DialogContainers
            loading={loading}
            show={show}
            onSave={onSave}
            onClose={onExit}
            width={width}
            title={check ? "Update product" : "Create product"}
        >
            <TextField
                fullWidth
                placeholder="Tên"
                name="name"
                onChange={onInput}
                value={product.name || ""}
                error={errors.name}
                helperText={errors.name ? "Vui lòng nhập tên." : ""}
            />
            <WhiteBar />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="categoryId"
                    onChange={onInput}
                    value={product.categoryId || ""}
                    label="Category"
                >
                    {categories.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <WhiteBar />
            <TextField
                fullWidth
                placeholder="Thứ tự"
                name="orderNum"
                onChange={onInput}
                value={product.orderNum || ""}
                error={errors.orderNum}
                helperText={errors.orderNum ? "Vui lòng nhập số thứ tự." : ""}
            />
            <WhiteBar />
        </DialogContainers>
    );
}
