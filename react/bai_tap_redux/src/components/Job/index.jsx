import { Box, Button, Checkbox, Typography } from "@mui/material";
import { memo } from "react";

const jobItem = ({ updateJob, todo, deleteJob, detail }) => {
    return (
        <>
            <Box
                key={todo.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={1}
            >
                <Checkbox
                    checked={todo.completed}
                    onChange={() => updateJob(todo)}
                />
                <Typography
                    variant="body1"
                    style={{
                        textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        width: 250,
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                    }}
                >
                    {todo.text}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {todo.priority}
                </Typography>
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteJob(todo.id)}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() => detail(todo)}
                >
                    Detail
                </Button>
            </Box>
        </>
    );
};
export default memo(jobItem);
