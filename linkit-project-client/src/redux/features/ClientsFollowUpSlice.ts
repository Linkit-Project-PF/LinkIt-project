import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobData: []
}

const JobDataSlice = createSlice({
    name: "jobData",
    initialState,
    reducers:{
        setJobData: (state, action) => {
            state.allJobData = action.payload;
        }
    }
})

export const { setJobData } = JobDataSlice.actions;
export default JobDataSlice.reducer;