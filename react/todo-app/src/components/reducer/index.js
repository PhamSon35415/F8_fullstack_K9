import Swal from "sweetalert2";
import { v4 } from "uuid";

export const resetJob = {
    id: null,
    content: "",
    status: 0,
};

const jobInput = (states, job, action) => {
    switch (action.key) {
        case "job/onInput": {
            let newJob = { ...job };
            newJob[action.value.name] = action.value.value;
            return newJob;
        }
        default:
            return job;
    }
};

const jobSave = (states, job, action) => {
    switch (action.key) {
        case "job/onSave": {
            let jobSaved = { ...job, id: v4() };
            let jobs = [...states, jobSaved];

            return {
                jobs: jobs,
                job: resetJob,
            };
        }
        case "job/onDone": {
            const updatedJobs = states.map((j) =>
                j.id === action.value.id
                    ? { ...j, status: action.value.status }
                    : j
            );
            return { jobs: updatedJobs, job };
        }
        default:
            return { jobs: states, job };
    }
};

const reducer = (state, action) => {
    const { job, jobs } = jobSave(state.jobs, state.job, action);
    return {
        job: jobInput(state.jobs, job, action),
        jobs: jobs,
    };
};

export default reducer;
