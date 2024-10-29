import store, { getJobs } from "./store";
import { useSelector } from "react-redux";
import { Form, List } from "./components";
import Search from "./components/search";

function App() {
    useSelector(getJobs);
    return (
        <>
            <Search />
            <Form />
            <List />
        </>
    );
}

export default App;
