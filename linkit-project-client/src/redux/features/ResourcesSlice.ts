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
    archived: boolean,
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
            state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.archived === false);
        },
        setEvents: (state) => {
            state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.archived === false);
        },
        setBlogs: (state) => {
            state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.archived === false);
        },
    },
});

export const { setResources, setEbooks, setEvents, setBlogs } = ResourcesSlice.actions;
export default ResourcesSlice.reducer;