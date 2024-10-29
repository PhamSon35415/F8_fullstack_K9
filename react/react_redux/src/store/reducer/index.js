import jobsReducer from "./jobs.js";
import inputtingJobReducer from "./inputtingJob.js";
import searchStr from "./searchStr.js";
import { configureStore } from "@reduxjs/toolkit";

const initState = {
    count: 0,
    jobs: [],
    searchStr: "",
    inputtingJob: {
        name: "",
        priority: "LOW",
    },
};
// const reducer=configureStore({
//     reducer:{
//         searchStr:searchStr,
//         jobs:jobsReducer,
//         inputtingJob:inputtingJobReducer,
//     }
// })
const reducer = (state = initState, action) => {
    return {
        searchStr: searchStr(state.searchStr, action),
        jobs: jobsReducer(state.jobs, action),
        inputtingJob: inputtingJobReducer(state, action),
    };
};

export default reducer;
