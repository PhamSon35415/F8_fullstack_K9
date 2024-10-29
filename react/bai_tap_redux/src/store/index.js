import { configureStore } from "@reduxjs/toolkit";
import { searchStrSlice, default as todoSlice } from "./todoService/index";
import { v4 } from "uuid";
const initialState = {
    id: v4(),
    text: "",
    completed: false,
    priority: "Medium",
};
export const store = configureStore({
    reducer: {
        // loading: loadingSlice.reducer,
        searchStr: searchStrSlice.reducer,
        todos: todoSlice.reducer,
    },
});
export * from "./todoService";
export * from "./select";
export { searchStrSlice, initialState };
