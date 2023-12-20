import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
    searchJobOffers: [],
}

type JobOffer = {
    id: number,
    title: string,
    description: string,
    company: string,
    location: string,
    salary: number,
    archived: boolean,
    created_at: string,

}

const JobCardSlice = createSlice({
    name: 'jobCard',
    initialState,
    reducers: {
        applyFilters: (state, action) => {
            state.jobOffers = action.payload.filter((jobOffer: JobOffer) => jobOffer.archived === false)
        },
        setJobOffers: (state, action) => {
            state.jobOffers = action.payload;
            state.allJobOffers = action.payload;
            state.searchJobOffers = action.payload;
        },
        setsearchJobOffers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filterdeJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>
                (jobOffer.title.toLowerCase().includes(searchTerm))
            )
            return { ...state, searchJobOffers: filterdeJobOffers }
        }
    }
})

export const { applyFilters, setJobOffers, setsearchJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


