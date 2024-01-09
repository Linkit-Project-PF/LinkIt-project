import { createSlice } from "@reduxjs/toolkit";
import { Admin, CompaniesProps, TalentProps } from "../../components/Paneles/admin.types";

const initialState = {
    talents: [],
    filteredTalents: [],
    companies: [],
    filteredCompanies: [],
    admins: [],
    filteredAdmins: [],
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersTalent: (state, action) => {
            state.talents = action.payload
            state.filteredTalents = action.payload
        },
        searchTalents: (state, action) => {
            const searchTerm = action.payload.toLocaleLowerCase();
            if (searchTerm) {
                const searchTalent = state.talents.filter((talent: TalentProps) => {
                    const searchTerms = searchTerm.split(' ');
                    return (
                        searchTerms.every((term: string) =>
                            talent.firstName.toLowerCase().includes(term) ||
                            talent.lastName.toLowerCase().includes(term)
                        )
                    )
                })
                state.filteredTalents = searchTalent
            } else {
                state.filteredTalents = state.talents
            }
        },
        sortTalents: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filteredTalents.sort((a: TalentProps, b: TalentProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateB.getTime() - dateA.getTime();
                })
            } else if (value === 'old') {
                state.filteredTalents.sort((a: TalentProps, b: TalentProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                })
            }
        },
        setUsersCompanies: (state, action) => {
            state.companies = action.payload
            state.filteredCompanies = action.payload
        },
        searchCompanies: (state, action) => {
            const searchTerm = action.payload.toLocaleLowerCase();
            if (searchTerm) {
                const searchCompany = state.companies.filter((company: CompaniesProps) => {
                    const searchTerms = searchTerm.split(' ');
                    return (
                        searchTerms.every((term: string) =>
                            company.companyName.toLowerCase().includes(term) ||
                            company.country.toLowerCase().includes(term)
                        )
                    )
                })
                state.filteredCompanies = searchCompany
            } else {
                state.filteredCompanies = state.companies
            }
        },
        sortCompanies: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filteredCompanies.sort((a: CompaniesProps, b: CompaniesProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateB.getTime() - dateA.getTime();
                })
            } else if (value === 'old') {
                state.filteredCompanies.sort((a: CompaniesProps, b: CompaniesProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                })
            }
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

export const { setUsersTalent, setUsersCompanies, setUsersAdmins, searchUsersAdmins, sortUsersAdmins, searchTalents, sortTalents, searchCompanies, sortCompanies } = UsersSlice.actions
export default UsersSlice.reducer