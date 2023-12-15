import { createSlice } from '@reduxjs/toolkit';

type step = {
    title: string,
    completed: boolean
}

export interface ApplicationState {
    application:{
        steps: step[]
    }
}

const initialState = {
    steps: [
        {
            title: "Step One",
            completed: false,
        },
        {
            title: "Step Two",
            completed: false,
        },
        {
            title: "Step Three",
            completed: false,
        },
    ],
    admins: []
}

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setCompletedStep: (state, action) => {
            state.steps[action.payload-1].completed = true;
        },
        setUncompletedStep: (state, action) => {
            state.steps[action.payload-1].completed = false;
        },
        setAdmins: (state, action) => {
            state.admins = action.payload;
        }
    }
})

export const { setCompletedStep, setUncompletedStep, setAdmins } = applicationSlice.actions;
export default applicationSlice.reducer;