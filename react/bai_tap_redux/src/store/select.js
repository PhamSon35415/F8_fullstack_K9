import { createSelector } from "@reduxjs/toolkit";

export const getTodos = createSelector(
    [(state) => state.todos.items, (state) => state.searchStr],
    (todos, searchStr) => {
        if (searchStr) {
            return todos.filter((todo) => todo.text.includes(searchStr));
        }
        return todos;
    }
);
// export const checkLoading = createSelector((state) => state.todos.loading);
// export { getTodos };
