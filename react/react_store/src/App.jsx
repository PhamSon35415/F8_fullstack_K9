import { useReducer } from "react";
import AppContext, { reducer } from "./store/index";
import { List, Search, Form } from "./components";
import { Box } from "@mui/material";

export const initState = {
    jobs: [
        {
            name: 1,
            priority: "High",
        },
    ],
    inputtingJob: {
        name: "",
        priority: "Low",
    },
    searchString: "",
};
function App() {
    const [state, dispatch] = useReducer(reducer, { ...initState });
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Box className="">
                <Search />
                <List />
                <Form />
            </Box>
        </AppContext.Provider>
    );
}

export default App;
