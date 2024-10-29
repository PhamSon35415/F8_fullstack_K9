import React, { memo, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    getTodos,
    initialState,
} from "./../../store";
import { Container, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import Job from "../Job";
import FormInput from "../FormInput";
import SearchInput from "../SearchInput";
import ReactLoading from "react-loading";
import { MyContext } from "../../App";

function ListTodo() {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const loading = useSelector((state) => state.todos.loading);
    const { job, setJob } = useContext(MyContext);
    const [check, setCheck] = useState(null);
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);
    const addJob = () => {
        if (job.text.trim()) {
            dispatch(addTodo(job));
            setJob(initialState);
        }
    };
    const updateJob = (todo) => {
        dispatch(updateTodo({ ...todo, completed: !todo.completed }));
    };
    const editJob = (todo) => {
        dispatch(updateTodo(job));
        setCheck(null);
        setJob(initialState);
    };
    const deleteJob = (id) => {
        dispatch(deleteTodo(id));
    };
    const detail = (data) => {
        setCheck(data);
        setJob({ ...data });
    };

    return (
        <Container maxWidth="sm">
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                >
                    <ReactLoading type="spinningBubbles" color="#00f" />
                </Box>
            ) : (
                <>
                    <Typography variant="h4" gutterBottom textAlign="center">
                        TODO APP
                    </Typography>
                    <SearchInput />
                    <Box mb={2}>
                        {todos.map((todo) => (
                            <Job
                                updateJob={updateJob}
                                todo={todo}
                                deleteJob={deleteJob}
                                detail={detail}
                            />
                        ))}
                    </Box>
                    <FormInput
                        editJob={editJob}
                        addJob={addJob}
                        check={check}
                    />
                </>
            )}
        </Container>
    );
}

export default memo(ListTodo);
