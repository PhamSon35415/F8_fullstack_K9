import DialogContainer from "../DialogContainers";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DialogContainers from "../DialogContainers";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import axios from "axios";

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

export default function ({
    check,
    category,
    show,
    onClose,
    width,
    setCategories,
}) {
    const [loading, setLoading] = useState(false);
    const [curCategory, setCurCategory] = useState({
        id: v4(),
        name: "",
        orderNum: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        orderNum: false,
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
            const method = check ? "patch" : "post";
            setLoading(true);
            try {
                await axios({
                    method,
                    url,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: curCategory,
                });
                setCategories((x) => {
                    if (check) {
                        return x.map((item) =>
                            item.id === curCategory.id ? curCategory : item
                        );
                    } else {
                        return [...x, curCategory];
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
        <>
            <DialogContainers
                loading={loading}
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
            </DialogContainers>
        </>
    );
}
