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
        {
            title: "Step Four",
            completed: false,
        }
    ],
    admins: [],
    isFormVisible: false,
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
        },
        setFormVisible: (state, action) => {
            state.isFormVisible = action.payload;
        }
    }
})

export const { setCompletedStep, setUncompletedStep, setAdmins, setFormVisible } = applicationSlice.actions;
export default applicationSlice.reducer;