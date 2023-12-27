import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allReviews: []
}


const ReviewSlice = createSlice ({
    name: "reviews",
    initialState,
    reducers: {
        setReviews: (state, action) =>{
            state.allReviews = action.payload;
        }
    }
})

export const { setReviews } = ReviewSlice.actions;
export default ReviewSlice.reducer; 