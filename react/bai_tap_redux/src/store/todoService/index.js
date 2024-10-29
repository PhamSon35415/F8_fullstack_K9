import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/todos";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (newTodo) => {
    const response = await axios.post(API_URL, newTodo);
    return response.data;
});

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (updatedTodo) => {
        const response = await axios.put(
            `${API_URL}/${updatedTodo.id}`,
            updatedTodo
        );
        return response.data;
    }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});
export const searchStrSlice = createSlice({
    name: "searchStr",
    initialState: "",
    reducers: {
        input: (state, action) => {
            return action.payload;
        },
    },
});

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (todo) => todo.id !== action.payload
                );
            });
    },
});

export default todoSlice;
