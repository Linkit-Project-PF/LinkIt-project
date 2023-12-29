import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
    filterJobOffers: [],
    historyJobOffers: [],
}

type JobOffer = {
    id: number,
    title: string,
    description: string,
    company: string,
    location: string,
    salary: number,
    archived: boolean,
    createdDate: Date,
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
            state.historyJobOffers = action.payload;
        },
        setfilterJobOffers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filterdeJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>
                (jobOffer.title.toLowerCase().includes(searchTerm))
            )
            return { ...state, filterJobOffers: filterdeJobOffers }
        },
        setFilterViewJobOffers: (state, action) => {
            const visibility = action.payload;
            if (visibility === 'Visible') {
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) => (jobOffer.archived === false))
            } else if (visibility === 'Hidden') {
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) => (jobOffer.archived === true))
            } else {
                state.filterJobOffers = state.allJobOffers
            }
        },
        setFilterDateJobOffers: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.historyJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    return dateB.getTime() - dateA.getTime()
                })
            } else if (value === 'old') {
                state.historyJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    return dateA.getTime() - dateB.getTime()
                })
            } else {
                state.historyJobOffers = state.filterJobOffers
            }
        }

    }
})


export const { applyFilters, setJobOffers, setfilterJobOffers, setFilterViewJobOffers, setFilterDateJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


