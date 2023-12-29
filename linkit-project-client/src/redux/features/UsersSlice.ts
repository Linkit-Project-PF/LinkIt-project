import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    talents: [], 
    companies:[],
    admins:[],
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        setUsersTalent: (state, action)=>{
            state.talents = action.payload
        },
        setUsersCompanies: (state, action)=>{
            state.companies = action.payload
        },
        setUsersAdmins: (state, action)=>{
            state.admins = action.payload
        },
    }
})

export const { setUsersTalent, setUsersCompanies, setUsersAdmins } = UsersSlice.actions
export default UsersSlice.reducer