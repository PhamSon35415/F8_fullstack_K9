import { useCallback, useRef, useState } from "react";
import { Child } from "./components";
import { reactRefresh } from "eslint-plugin-react-refresh";

function App() {
    const [count, setCount] = useState(0);
    const reference = useRef(null);
    // console.log("re-render");
    const func = useCallback(() => {
        return "name";
    }, []);
    // console.log(func);
    console.log(reference);

    return (
        <>
            <span ref={reference}>Count: {count}</span>
            <br />
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
                ref={reference}
            >
                Click
            </button>
            <br />
            <Child func={func} />
        </>
    );
}

export default App;
