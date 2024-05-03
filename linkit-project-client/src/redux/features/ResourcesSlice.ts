import { createSlice } from "@reduxjs/toolkit";
import { ResourceProps } from "../../components/Paneles/admin.types";

const initialState = {
    resources: [],
    allresources: [], 
    filteredResources: [],
    ebooks: [],
    events: [],
    blogs: [],
    stackTechnologies: [],
    countries: [],
    techStack: [],
    categories: []
}



const ResourcesSlice = createSlice({
    name: "resources",
    initialState,
    reducers: {
        setResources: (state, action) => {
            state.resources = action.payload;
            state.allresources = action.payload;
            state.filteredResources = action.payload
        },
        
        setEbooks: (state) => {
            state.ebooks = state.allresources.filter((resource: ResourceProps) => resource.type === "ebook" && resource.archived === false);
        },
        setEvents: (state) => {
            state.events = state.allresources.filter((resource: ResourceProps) => resource.type === "social" && resource.archived === false);
        },
        setBlogs: (state) => {
            state.blogs = state.allresources.filter((resource: ResourceProps) => resource.type === "blog" && resource.archived === false);
        },
        setFilterResources: (state, action) => {
            const category = action.payload.toLowerCase();
            const { allresources } = state;

                const filteredResources = category === "todos" 
                ? allresources.filter((resource: ResourceProps) => !resource.archived)
                : allresources.filter((resource: ResourceProps) =>
                    resource.category.toLowerCase() === category && !resource.archived
                );
            state.resources = filteredResources;        
            state.blogs = filteredResources.filter((resource: ResourceProps) =>
                resource.type === "blog"
            );        
            state.ebooks = filteredResources.filter((resource: ResourceProps) =>
                resource.type === "ebook"
            );        
            state.events = filteredResources.filter((resource: ResourceProps) =>
                resource.type === "social"
            );
        },
        setSearchResources: (state, action) => {
            state.resources = state.allresources.filter((resource: ResourceProps) => resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.blogs = state.allresources.filter((resource: ResourceProps) => resource.type === "blog" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.ebooks = state.allresources.filter((resource: ResourceProps) => resource.type === "ebook" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
            state.events = state.allresources.filter((resource: ResourceProps) => resource.type === "social" && resource.title.toLowerCase().includes(action.payload.toLowerCase()) && resource.archived === false);
        
        },
        searchResource: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm) {
                const searchResource = state.allresources.filter((review: ResourceProps) => {
                    const searchTerms = searchTerm.split(' ');
                    return (
                        searchTerms.every((term: string) =>
                            review.title.toLowerCase().includes(term) ||
                            review.type.toLowerCase().includes(term)
                        )
                    )
                })
                state.filteredResources = searchResource
            } else {
                state.filteredResources = state.allresources
            }
        },
        sortResource: (state, action) => {
            const value = action.payload;
            if (value === 'recent') {
                state.filteredResources.sort((a: ResourceProps, b: ResourceProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateB.getTime() - dateA.getTime();
                })
            } else if (value === 'old') {
                state.filteredResources.sort((a: ResourceProps, b: ResourceProps) => {
                    const dateA = new Date(a.createdDate);
                    const dateB = new Date(b.createdDate);
                    return dateA.getTime() - dateB.getTime();
                })
            }
        },
        setStackTechnologies: (state, action) => {
            state.stackTechnologies = action.payload;
        },
        setTechStack: (state, action) => {
            state.techStack = action.payload
        },
        setCountries: (state, action) => {
            state.countries = action.payload
        }
    },
});

export const { setTechStack, setCountries, setResources, setEbooks, setEvents, setBlogs, setFilterResources, setSearchResources, setStackTechnologies, searchResource, sortResource} = ResourcesSlice.actions;
export default ResourcesSlice.reducer;