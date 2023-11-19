import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resources: [],
    allresources: [],
    ebooks: [],
    events: [],
    blogs: [],
}

type Resource = {
    id: number,
    title: string,
    description: string,
    link: string,
    type: string,
    date: string,
    image: string,
    category: string,
}

const ResourcesSlice = createSlice({
    name: "resources",
    initialState,
    reducers: {
        setResources: (state, action) => {
            state.resources = action.payload;
            state.allresources = action.payload;
        },
        setEbooks: (state) => {
            state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook");
        },
        setEvents: (state, action) => {
            state.events = action.payload;
        },
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
    },
});

export const { setResources } = ResourcesSlice.actions;
export default ResourcesSlice.reducer;