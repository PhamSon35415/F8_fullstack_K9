import { useContext } from "react";
import AppContext from "../../store";

export default function () {
    const { state } = useContext(AppContext);
    const { jobs } = state;
    console.log(state);

    return (
        <>
            <ul>
                {jobs.map((jop, index) => {
                    return (
                        <li key={index}>
                            {jop.name}-{jop.priority}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
