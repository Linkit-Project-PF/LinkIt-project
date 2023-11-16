import { configureStore } from "@reduxjs/toolkit";
import registerLoginSlice from "./features/registerLoginSlice"
import JobCardSlice from "./features/JobCardsSlice"
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk'
import AuthSlice from "./features/AuthSlice";

const persistConfig ={
    key: "root",
    storage,
    whitelist:["authState"]
}

const rootReducer = combineReducers({
    authState: AuthSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: {
        Authentication : persistedReducer,
        registerLogin: registerLoginSlice,
        jobCard: JobCardSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunk),
})

export default store;