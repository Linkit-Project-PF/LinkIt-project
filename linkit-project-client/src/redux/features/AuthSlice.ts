import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    role: '',
    token: null,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginSuccess: ( state, action) =>{
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.role = action.payload.role
        },
        logout: (state) =>{
            state.isAuthenticated = false;
            state.token = null;
            state.role = '';
        }
    }
})

export const { loginSuccess, logout} = authSlice.actions;
export default authSlice.reducer;