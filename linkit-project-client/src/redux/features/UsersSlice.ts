import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: []
}

const UsersSlice = createSlice ({ 
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) =>{
            state.allUsers = action.payload;
        }
    }
})

export const { setUsers } = UsersSlice.actions;
export default UsersSlice.reducer;