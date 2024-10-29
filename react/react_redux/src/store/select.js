import { createSelector } from "@reduxjs/toolkit";

const getCount = (state) => state.count;
const getJobs = createSelector(
    [(state) => state.jobs, (state) => state.searchStr],
    (jobs, searchStr) => {
        if (searchStr) {
            return jobs.filter((job) => {
                return job.name.includes(searchStr);
            });
        }
        return jobs;
    }
);
const getInputtingJob = (state) => state.inputtingJob;
const getSearchStr = (state) => state.searchStr;

export { getCount, getJobs, getInputtingJob, getSearchStr };
