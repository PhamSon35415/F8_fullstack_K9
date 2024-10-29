import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchStrSlice } from "../../store";
import { memo } from "react";

export default memo(function () {
    const dispatch = useDispatch();
    const onInput = (e) => {
        dispatch(searchStrSlice.actions.input(e.target.value));
    };
    return (
        <>
            <Box display="flex" alignItems="center" mb={2}>
                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    onChange={onInput}
                    style={{ marginRight: 8 }}
                />
            </Box>
        </>
    );
});
