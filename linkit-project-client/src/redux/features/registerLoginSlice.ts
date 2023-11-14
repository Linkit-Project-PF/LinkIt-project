import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pressLogin: 'hidden',
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
        }
    }
})

export default registerLoginSlice.reducer;
export const { setPressLogin, setPressSignUp, setPressRegister } = registerLoginSlice.actions;