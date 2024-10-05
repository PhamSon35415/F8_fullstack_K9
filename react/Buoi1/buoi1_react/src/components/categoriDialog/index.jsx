import React, { useState } from "react";
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
export default function ({ show, onClose, width, reload }) {
    const [category, setCategory] = useState({
        id: v4(),
        name: "",
        orderNum: 1,
    });
    const onInput = (e) => {
        const newCategory = { ...category };
        newCategory[e.target.name] = e.target.value;
        setCategory({ ...newCategory });
    };
    const onSave = async () => {
        const response = await fetch("http://localhost:3000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        });
        if (response.ok) {
            await reload();
            onClose();
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
                    {"Thêm mới danh mục"}
                </DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth={true}
                        placeholder="Tên"
                        onInput={onInput}
                        name="name"
                    />
                    <WhiteBar></WhiteBar>
                    <TextField
                        fullWidth={true}
                        placeholder="Thứ tự"
                        onInput={onInput}
                        name="orderNum"
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
