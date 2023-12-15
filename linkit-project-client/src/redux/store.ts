import { configureStore } from "@reduxjs/toolkit";
import registerLoginSlice from "./features/registerLoginSlice"
import JobCardSlice from "./features/JobCardsSlice"
import ResourcesSlice from "./features/ResourcesSlice";
import ApplicationSlice from "./features/ApplicationSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk'
import AuthSlice from "./features/AuthSlice";
import ReviewsSlice from "./features/ReviewsSlice";
import UsersSlice from "./features/UsersSlice";

const persistConfig ={
  key: "root",
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, AuthSlice)

const rootReducer = combineReducers({
  Authentication: persistedAuthReducer,
  registerLogin: registerLoginSlice,
  jobCard: JobCardSlice,
  resources: ResourcesSlice,
  reviews: ReviewsSlice,
  users: UsersSlice,
  application: ApplicationSlice,
})


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(thunk),
})

export default store;