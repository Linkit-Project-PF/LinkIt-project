import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allJobData: [],
    filteredJobData: []
}

type ClientsFUProps = {
    "Recruitment role code": string,
    Client: string,
    "Role Name": string,
    "Lider de la búsqueda": string,
    Responsable: string,
    created: string,
}


const JobDataSlice = createSlice({
    name: "jobData",
    initialState,
    reducers: {
        setJobData: (state, action) => {
            state.allJobData = action.payload;
            state.filteredJobData = action.payload;
        },
        filterJobData: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm) {
                const searchJobData = state.allJobData.filter((jobData: ClientsFUProps) => jobData["Recruitment role code"].toString().toLowerCase().includes(searchTerm) || jobData.Client.toLowerCase().includes(searchTerm) || jobData["Role Name"].toLowerCase().includes(searchTerm) || jobData["Lider de la búsqueda"].toString().toLowerCase().includes(searchTerm) || jobData.Responsable.toLowerCase().includes(searchTerm))
                state.filteredJobData = searchJobData
            } else {
                state.filteredJobData = state.allJobData
            }
        },
        sortJobData: (state, action) => {
            const value = action.payload;
            state.filteredJobData = state.filteredJobData.slice();

            if (value === "recent") {
                state.filteredJobData.sort((a: ClientsFUProps, b: ClientsFUProps) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);
                    return dateB.getTime() - dateA.getTime();
                });
            }

            if (value === "old") {
                state.filteredJobData.sort((a: ClientsFUProps, b: ClientsFUProps) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);
                    return dateA.getTime() - dateB.getTime();
                });
            }
        }
    }
})

export const { setJobData, filterJobData, sortJobData } = JobDataSlice.actions;
export default JobDataSlice.reducer;