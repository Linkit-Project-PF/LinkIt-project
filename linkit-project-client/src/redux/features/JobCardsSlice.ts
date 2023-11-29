import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
}

const JobCardSlice = createSlice({
    name: 'jobCard',
    initialState,
    reducers: {
        applyFilters: (state, action) => {
            state.jobOffers = action.payload
        },
        setJobOffers: (state, action) =>{
            state.jobOffers = action.payload;
            state.allJobOffers = action.payload;
        }
    }
})

export const { applyFilters, setJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


