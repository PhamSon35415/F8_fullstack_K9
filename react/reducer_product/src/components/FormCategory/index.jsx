import ContainerFrom from "../ContainerFrom";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
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
        const newCategory = { ...curCategory };
        newCategory[e.target.name] = e.target.value;
        setCurCategory(newCategory);
    };
    const [errors, setErrors] = useState({
        name: false,
        orderNum: false,
    });
    const validate = () => {
        let tempErrors = { name: false, orderNum: false };
        let isValid = true;

        if (!curCategory.name) {
            tempErrors.name = true;
            isValid = false;
        }

        if (!curCategory.orderNum || isNaN(curCategory.orderNum)) {
            tempErrors.orderNum = true;
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const onSave = async () => {
        if (validate()) {
            const url = check
                ? `https://jlny6y-8080.csb.app/categories/${curCategory.id}`
                : "https://jlny6y-8080.csb.app/categories";
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
                    timer: 1000,
                });
            }
        }
    };

    return (
        <>
            <ContainerFrom
                show={show}
                onSave={onSave}
                onClose={onExit}
                width={width}
                title={check ? "Update category" : "Create category"}
            >
                <WhiteBar />
                <TextField
                    className={"pt-2"}
                    fullWidth
                    placeholder="Name"
                    name="name"
                    required
                    onInput={onInput}
                    value={curCategory.name || ""}
                    error={errors.name}
                    helperText={errors.name ? "Vui lòng nhập tên." : ""}
                />
                <WhiteBar />
                <TextField
                    className={"pt-2"}
                    fullWidth
                    placeholder="Order num"
                    name="orderNum"
                    onInput={onInput}
                    required
                    value={curCategory.orderNum || ""}
                    error={errors.orderNum}
                    helperText={
                        errors.orderNum ? "Vui lòng nhập số thứ tự." : ""
                    }
                />
                <WhiteBar />
            </ContainerFrom>
        </>
    );
}
