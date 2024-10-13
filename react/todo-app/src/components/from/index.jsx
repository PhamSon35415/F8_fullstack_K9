import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function FormInput({ onInput, onSave, job }) {
    const [error, setError] = useState(false);
    const handleSave = () => {
        if (!job.content.trim()) {
            setError(true);
        } else {
            setError(false);
            onSave();
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 2,
            }}
        >
            <TextField
                id="outlined-basic"
                label="Nội dung công việc"
                variant="outlined"
                onInput={onInput}
                name="content"
                value={job.content}
                error={error}
                helperText={error ? "Nội dung không được để trống" : ""}
                sx={{ flexGrow: 1, marginRight: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
                Lưu
            </Button>
        </Box>
    );
}
export default FormInput;
