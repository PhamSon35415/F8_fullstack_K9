import DialogContainer from "../DialogContainers";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DialogContainers from "../DialogContainers";
import { v4 } from "uuid";
import Swal from "sweetalert2";

function WhiteBar() {
    return (
        <Box
            sx={(theme) => ({
                height: 20,
                backgroundColor: "white",
            })}
        />
    );
}

export default function ({ check, category, show, onClose, width, reload }) {
    const [curCategory, setCurCategory] = useState({
        id: v4(),
        name: "",
        orderNum: "",
    });
    const onExit = () => {
        onClose();
        setCurCategory({ id: v4(), name: "", orderNum: "" });
    };

    useEffect(() => {
        if (check && category) {
            setCurCategory({ ...category });
        }
    }, [category, check]);

    const onInput = (e) => {
        const { name, value } = e.target;
        setCurCategory((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSave = async () => {
        const url = check
            ? `http://localhost:3000/categories/${curCategory.id}`
            : "http://localhost:3000/categories";
        const method = check ? "PATCH" : "POST";

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(curCategory),
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
    };

    return (
        <>
            <DialogContainers
                show={show}
                onSave={onSave}
                onClose={onExit}
                width={width}
            >
                <WhiteBar />
                <TextField
                    className={"pt-2"}
                    fullWidth
                    placeholder="Name"
                    name="name"
                    onInput={onInput}
                    value={curCategory.name || ""}
                />
                <WhiteBar />
                <TextField
                    className={"pt-2"}
                    fullWidth
                    placeholder="Order num"
                    name="orderNum"
                    onInput={onInput}
                    value={curCategory.orderNum || ""}
                />
                <WhiteBar />
            </DialogContainers>
        </>
    );
}
