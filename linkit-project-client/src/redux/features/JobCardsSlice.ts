import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
    filterJobOffers: [],
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
            state.filterJobOffers = action.payload;
        },
        setfilterJobOffers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filterdeJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>
            (jobOffer.title.toLowerCase().includes(searchTerm))
            )
            return { ...state, filterJobOffers: filterdeJobOffers }
        },
        setFilterJobOffers:(state, action) =>{
            const visibility = action.payload;
            
            if (visibility === 'Visible'){
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>(jobOffer.archived === false))
            } else if (visibility === 'Hidden'){
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>(jobOffer.archived === true))
            } else {
                state.filterJobOffers = state.allJobOffers
            }
        }
    }
})


export const { applyFilters, setJobOffers, setfilterJobOffers, setFilterJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


