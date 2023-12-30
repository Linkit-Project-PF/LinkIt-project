import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobOffers: [],
    allJobOffers: [],
    filterJobOffers: [],
    sortJobOffers: [],
    sortValues: {
        sortAlfa: '-',
        sortDate: 'recent',
        sortView: 'Visible'
    }
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
            state.sortJobOffers = action.payload;
        },
        setfilterJobOffers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filterdeJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>
                (jobOffer.title.toLowerCase().includes(searchTerm))
            )
            return { ...state, filterJobOffers: filterdeJobOffers }
        },
        setSortJobOffers: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.sortJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    state.sortValues.sortDate = 'recent'
                    state.sortValues.sortAlfa = '-'
                    return dateB.getTime() - dateA.getTime()
                })
            } else if (value === 'old') {
                state.sortJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    state.sortValues.sortDate = 'old'
                    state.sortValues.sortAlfa = '-'
                    return dateA.getTime() - dateB.getTime()
                })
            } else if (value === 'A-Z') {
                state.sortJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    state.sortValues.sortDate = '-'
                    state.sortValues.sortAlfa = 'A-Z'
                    return titleA.localeCompare(titleB)
                })
            } else if (value === 'Z-A') {
                state.sortJobOffers = state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    state.sortValues.sortDate = '-'
                    state.sortValues.sortAlfa = 'Z-A'
                    return titleB.localeCompare(titleA)
                })
            } else if (value === 'Visible') {
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) => (jobOffer.archived === false))
                state.sortValues.sortView = 'Visible'
            } else if (value === 'Hidden') {
                state.filterJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) => (jobOffer.archived === true))
                state.sortValues.sortView = 'Hidden'
            } else if (value === 'All') {
                state.filterJobOffers = state.allJobOffers
                state.sortValues.sortView = 'All'
            }
        }

    }
})


export const { applyFilters, setJobOffers, setfilterJobOffers, setSortJobOffers } = JobCardSlice.actions;
export default JobCardSlice.reducer;


