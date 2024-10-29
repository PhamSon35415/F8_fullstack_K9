import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { memo, useContext } from "react";
import { MyContext } from "../../App";
import { useSelector } from "react-redux";
import spinningBubbles from "react-loading";
import ReactLoading from "react-loading";
export default memo(function ({ addJob, check, editJob }) {
    const { job, setJob } = useContext(MyContext);
    const onInput = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };
    const loading = useSelector((state) => state.todos.loadingBtn);
    return (
        <>
            <Box display="flex" alignItems="center" mb={2}>
                <TextField
                    label="Name Job"
                    variant="outlined"
                    size="small"
                    value={job.text}
                    onChange={onInput}
                    name="text"
                    fullWidth
                    style={{ marginRight: 8 }}
                />
                <Select
                    value={job.priority}
                    onChange={onInput}
                    name="priority"
                    size="small"
                    style={{ marginRight: 8 }}
                >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </Select>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        !check ? addJob() : editJob(check);
                    }}
                    disabled={loading}
                >
                    {loading ? (
                        <ReactLoading
                            type="spinningBubbles"
                            color="#00f"
                            height={20}
                            width={20}
                        />
                    ) : (
                        "Save"
                    )}
                </Button>
            </Box>
        </>
    );
});
