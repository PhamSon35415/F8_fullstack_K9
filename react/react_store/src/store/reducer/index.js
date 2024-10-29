import inputtingReducer from "./inputtingReducer";
import searchReducer from "./searchReducer";
import jobReducer from "./jobReducer";
const reducer = (state, action) => {
    console.log(state, action);

    return {
        inputtingJob: inputtingReducer(state.inputtingJob, action),
        searchString: searchReducer(state.searchString, action),
        jobs: jobReducer(state.jobs, action),
    };
};
export default reducer;
