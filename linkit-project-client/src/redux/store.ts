import { configureStore } from "@reduxjs/toolkit";
import registerLoginSlice from "./features/registerLoginSlice"
import JobCardSlice from "./features/JobCardsSlice"

const store = configureStore({
    reducer: {
        registerLogin: registerLoginSlice,
        jobCard: JobCardSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store;