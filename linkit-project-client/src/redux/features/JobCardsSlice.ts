import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
    filters: []
}

const JobCardSlice = createSlice({
    name: 'jobCard',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        applyFilters: (state) => {
            state.jobOffers = state.allJobOffers.filter(offer => {
                // Apply all filters. If a filter function returns false, exclude the offer.
                for (let key in state.filters) {
                    if (state.filters[key] !== offer[key]) {
                        return false;
                    }
                }
                // If none of the filters excluded the offer, include it.
                return true;
            });
        },
        setJobOffers: (state, action) =>{
            state.jobOffers = action.payload;
            state.allJobOffers = action.payload;
        }
    }
})

export const { setFilters, applyFilters, setJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


