import { createSlice } from "@reduxjs/toolkit";
import { Admin } from "../../components/Paneles/admin.types";

const initialState = {
    talents: [],
    companies: [],
    admins: [],
    filteredAdmins: [],
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersTalent: (state, action) => {
            state.talents = action.payload
        },
        setUsersCompanies: (state, action) => {
            state.companies = action.payload
        },
        setUsersAdmins: (state, action) => {
            state.admins = action.payload
            state.filteredAdmins = action.payload
        },
        searchUsersAdmins: (state, action) => {
            const searchTerm = action.payload.toLocaleLowerCase();
            if (searchTerm) {
                const searchAdmin = state.admins.filter((admin: Admin) => {
                    const searchTerms = searchTerm.split(' ');
                    return (
                        searchTerms.every((term: string) =>
                            admin.firstName.toLowerCase().includes(term) ||
                            admin.lastName.toLowerCase().includes(term)
                        )
                    )
                })
                state.filteredAdmins = searchAdmin
            } else {
                state.filteredAdmins = state.admins
            }
        },
        sortUsersAdmins: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filteredAdmins.sort((a: Admin, b: Admin) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateB.getTime() - dateA.getTime();
                })
            } else if (value === 'old') {
                state.filteredAdmins.sort((a: Admin, b: Admin) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                })
            }
        }
    }
})

export const { setUsersTalent, setUsersCompanies, setUsersAdmins, searchUsersAdmins, sortUsersAdmins } = UsersSlice.actions
export default UsersSlice.reducer