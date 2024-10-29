import { useSelector } from "react-redux";
import { getJobs } from "../../store";

export default function () {
    const jobs = useSelector(getJobs);

    return (
        <>
            <h1>List</h1>
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
