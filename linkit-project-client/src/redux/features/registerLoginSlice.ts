import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pressLogin: 'hidden',
    pressSignUp: 'hidden',
    pressCompany: 'hidden',
    pressTalent: 'hidden',
}

const registerLoginSlice = createSlice({
    name: 'registerLogin',
    initialState,
    reducers:{
        setPressLogin: (state, action) => {
            state.pressLogin = action.payload;
        },
        setPressSignUp: (state, action) => {
            state.pressSignUp = action.payload;
        },
        setPressCompany: (state, action) => {
            state.pressCompany = action.payload;
        },  
        setPressTalent: (state, action) => {
            state.pressTalent = action.payload;
        },
    }
})

export default registerLoginSlice.reducer;
export const { setPressLogin, setPressSignUp, setPressCompany, setPressTalent } = registerLoginSlice.actions;