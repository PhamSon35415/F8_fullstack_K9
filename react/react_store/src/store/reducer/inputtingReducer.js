export default function (state, action) {
    switch (action.type) {
        case "inputtingJob/priority/update":
            return { ...state, priority: action.payload };
        case "inputtingJob/name/update":
            return { ...state, name: action.payload };
        default:
            return state;
    }
}
