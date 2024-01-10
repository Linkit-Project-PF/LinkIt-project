import { createSlice } from "@reduxjs/toolkit";
import { ReviewProps } from "../../components/Paneles/admin.types";

const initialState = {
    allReviews: [],
    filteredReviews: [],
}


const ReviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setReviews: (state, action) => {
            state.allReviews = action.payload;
            state.filteredReviews = action.payload
        },
        searchReviews: (state, action) => {
            const searchTerm = action.payload.toLocaleLowerCase();
            if (searchTerm) {
                const searchReview = state.allReviews.filter((review: ReviewProps) => {
                    const searchTerms = searchTerm.split(' ');
                    return (
                        searchTerms.every((term: string) =>
                            review.name.toLowerCase().includes(term) ||
                            review.country.toLowerCase().includes(term)
                        )
                    )
                })
                state.filteredReviews = searchReview
            } else {
                state.filteredReviews = state.allReviews
            }
        },
        sortReviews: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filteredReviews.sort((a: ReviewProps, b: ReviewProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateB.getTime() - dateA.getTime();
                })
            } else if (value === 'old') {
                state.filteredReviews.sort((a: ReviewProps, b: ReviewProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                })
            }
        },
    }
})

export const { setReviews, searchReviews, sortReviews } = ReviewSlice.actions;
export default ReviewSlice.reducer; 