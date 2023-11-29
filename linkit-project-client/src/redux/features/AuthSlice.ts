import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../types";
import { IUser } from "../../components/Profiles/types";

const initialState: IAuthState = {
  isAuthenticated: false,
  role: '',
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    loginSuccess: (state, action: PayloadAction<IUser>) =>{
      state.isAuthenticated = true
      /** @deprecated remove it and use state.user only */
      state.token = action.payload._id
      /** @deprecated remove it and use state.user only */
      state.role = action.payload.role
      state.user = action.payload
    },
    logout: (state) =>{
      state.isAuthenticated =  false
      state.user = null
      state.token = null
      state.role = ''
    }
  }
})

export const { loginSuccess, logout, setUser} = authSlice.actions;
export default authSlice.reducer;