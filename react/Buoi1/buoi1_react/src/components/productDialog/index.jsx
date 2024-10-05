import React, { useEffect, useState } from "react";
import {
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    DialogContentText,
    TextField,
    Input,
    OutlinedInput,
    Box,
} from "@mui/material";
import { v4 } from "uuid";
function WhiteBar() {
    return (
        <Box
            sx={(theme) => ({
                height: 20,
                backgroundColor: "#fff",
                ...theme.applyStyles("dark", {
                    backgroundColor: "#fff",
                }),
            })}
        />
    );
}
export default function ({ show, onClose, width, reload, check, item }) {
    const [product, setProduct] = useState({
        id: v4(),
        name: "",
        categoryId: 1,
        orderNum: 1,
    });
    useEffect(() => {
        if (check) {
            setProduct(item);
        }
    }, []);
    const onInput = (e) => {
        const newproduct = { ...product };
        newproduct[e.target.name] = e.target.value;
        setProduct({ ...newproduct });
    };
    const onSave = async () => {
        if (!check) {
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                await reload();
                onClose();
            }
        } else {
            const response = await fetch(
                `http://localhost:3000/products/${product.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(product),
                }
            );
            if (response.ok) {
                await reload();
                onClose();
            }
        }
    };
    return (
        <>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" width={width}>
                    {"Thêm mới sản phẩm "}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth={true}
                        placeholder="Tên"
                        name="name"
                        onInput={onInput}
                    />
                    <WhiteBar></WhiteBar>
                    <TextField
                        fullWidth={true}
                        placeholder="Giá"
                        name="categoryId"
                        onInput={onInput}
                    />
                    <WhiteBar></WhiteBar>
                    <TextField
                        fullWidth={true}
                        placeholder="Thứ tự"
                        name="orderNum"
                        onInput={onInput}
                    />
                    <WhiteBar></WhiteBar>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSave}>Save</Button>
                    <Button onClick={onClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
