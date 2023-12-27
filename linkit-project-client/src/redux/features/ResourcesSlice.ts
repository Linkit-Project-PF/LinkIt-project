import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resources: [],
    allresources: [],
    ebooks: [],
    events: [],
    blogs: [],
    stackTechnologies: [],
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
        setFilterResources: (state, action) => {
            if(action.payload === "todos"){
                state.resources = state.allresources.filter((resource: Resource) => resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.archived === false);
            }
            else if(action.payload === "adquisición de talentos"){
                state.resources = state.allresources.filter((resource: Resource) => resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
            }
            else if(action.payload === "contratación"){
                state.resources = state.allresources.filter((resource: Resource) => resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
            }
            else if(action.payload === "casos de éxito"){
                state.resources = state.allresources.filter((resource: Resource) => resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
            }
            else if(action.payload === "entrevista"){
                state.resources = state.allresources.filter((resource: Resource) => resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
            }
            else if(action.payload === "guía"){
                state.resources = state.allresources.filter((resource: Resource) => resource.category.toLocaleLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.category.toLocaleLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
                state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.category.toLowerCase() === action.payload.toLowerCase() && resource.archived === false);
            }
        },
        setSearchResources: (state, action) => {
            state.resources = state.allresources.filter((resource: Resource) => resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.blogs = state.allresources.filter((resource: Resource) => resource.type === "blog" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.ebooks = state.allresources.filter((resource: Resource) => resource.type === "ebook" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.events = state.allresources.filter((resource: Resource) => resource.type === "social" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
        
        },
        setStackTechnologies: (state, action) => {
            state.stackTechnologies = action.payload;
        }
    },
});

export const { setResources, setEbooks, setEvents, setBlogs, setFilterResources, setSearchResources, setStackTechnologies} = ResourcesSlice.actions;
export default ResourcesSlice.reducer;