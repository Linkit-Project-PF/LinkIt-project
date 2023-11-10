import { configureStore } from "@reduxjs/toolkit";
import registerLoginSlice from "./features/registerLoginSlice"

const store = configureStore({
    reducer: {
        registerLogin: registerLoginSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;