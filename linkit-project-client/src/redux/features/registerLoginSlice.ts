import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pressLogin: 'hidden',
    pressLoginTalent: 'hidden',
    pressLoginCompany: 'hidden',
    pressSignUp: 'hidden',
    pressRegister: "hidden"
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
        setPressRegister: (state, action) => {
            state.pressRegister = action.payload;
        },
        setPressLoginTalent: (state, action) => {
            state.pressLoginTalent = action.payload;
        },
        setPressLoginCompany: (state, action) => {
            state.pressLoginCompany = action.payload;
        }
    }
})

export default registerLoginSlice.reducer;
export const { setPressLogin, setPressSignUp, setPressRegister, setPressLoginCompany, setPressLoginTalent } = registerLoginSlice.actions; 