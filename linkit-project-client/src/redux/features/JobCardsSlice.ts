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
    code: string,
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
            state.sortValues.sortView = 'All'
        },

        setSearchJobOffers: (state, action) => {
            state.sortValues.sortView = 'All'
            const searchTerm = action.payload.toLowerCase();
            const filteredJobOffers = state.allJobOffers.filter((jobOffer: JobOffer) =>
                (jobOffer.title.toLowerCase().includes(searchTerm)) || (jobOffer.code.toLocaleLowerCase().includes(searchTerm))
            )
            state.filterJobOffers = filteredJobOffers
        },
        setSortJobOffers: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    state.sortValues.sortDate = 'recent'
                    state.sortValues.sortAlfa = '-'
                    return dateB.getTime() - dateA.getTime()
                })
            } else if (value === 'old') {
                state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const dateA = new Date(a.createdDate)
                    const dateB = new Date(b.createdDate)
                    state.sortValues.sortDate = 'old'
                    state.sortValues.sortAlfa = '-'
                    return dateA.getTime() - dateB.getTime()
                })
            } else if (value === 'A-Z') {
                state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
                    const titleA = a.title.toLowerCase();
                    const titleB = b.title.toLowerCase();
                    state.sortValues.sortDate = '-'
                    state.sortValues.sortAlfa = 'A-Z'
                    return titleA.localeCompare(titleB)
                })
            } else if (value === 'Z-A') {
                state.filterJobOffers.sort((a: JobOffer, b: JobOffer) => {
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
        },
        filterByCompany: (state, action) => {
            const valueN = action.payload;
            const value = valueN.toLowerCase();
            if (value === 'all') {
                return {
                    ...state,
                    sortValues: { ...state.sortValues, sortView: 'All' },
                    filterJobOffers: state.allJobOffers,
                };
                
            } else {
                const filteredCompanies = state.allJobOffers.filter((c: JobOffer) => {
                    const companyLower = c.company.toLowerCase()
                    return companyLower === value;
                });
                return {
                    ...state,
                    sortValues: { ...state.sortValues, sortView: 'All' },
                    filterJobOffers: filteredCompanies,
                };
            }
        },

    }
})


export const { applyFilters, setJobOffers, setSearchJobOffers, setSortJobOffers, filterByCompany } = JobCardSlice.actions;
export default JobCardSlice.reducer;


