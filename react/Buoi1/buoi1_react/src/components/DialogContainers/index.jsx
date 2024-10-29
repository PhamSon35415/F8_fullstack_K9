import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import React from "react";
import LoadingSpinner from "../Loading";

export default function ({
    title,
    onSave,
    show,
    onClose,
    width,
    children,
    loading,
}) {
    return (
        <>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" width={width}>
                    {title}
                </DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onSave} autoFocus disabled={loading}>
                        {loading ? (
                            <>
                                <LoadingSpinner
                                    loading={loading}
                                    size={20}
                                    color="#1976d2"
                                />
                                <span style={{ marginLeft: "8px" }}>
                                    Dang lưu...
                                </span>
                            </>
                        ) : (
                            "Save"
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
