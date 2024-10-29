import { createContext, useState } from "react";
import { ListJob } from "./components";
import { initialState } from "./store";
export const MyContext = createContext();
function App() {
    const [job, setJob] = useState(initialState);

    return (
        <>
            <MyContext.Provider value={{ job, setJob }}>
                <ListJob />
            </MyContext.Provider>
        </>
    );
}

export default App;
