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

    const getCategories = async () => {
        try {
            const response = await fetch("http://localhost:3000/categories");
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
        try {
            const method = check ? "PATCH" : "POST";
            const url = check
                ? `http://localhost:3000/products/${product.id}`
                : "http://localhost:3000/products";
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
                    timer: 1500,
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
            />
            <WhiteBar />
        </DialogContainers>
    );
}
