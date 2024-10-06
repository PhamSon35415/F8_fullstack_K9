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

export default function ({ show, onClose, width, reload, check, productItem }) {
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
        if (!validate()) {
            return;
        }
        try {
            const method = check ? "PATCH" : "POST";
            const url = check
                ? `https://jlny6y-8080.csb.app/products/${product.id}`
                : "https://jlny6y-8080.csb.app/products";
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                await reload();
                onExit();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Lưu thành công",
                    showConfirmButton: false,
                    timer: 1000,
                });
            }
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    return (
        <DialogContainers
            show={show}
            onSave={onSave}
            onClose={onExit}
            width={width}
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
