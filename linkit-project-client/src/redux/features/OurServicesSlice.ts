import { createSlice } from "@reduxjs/toolkit";
import peopleIcon from "/Vectores/people_white.svg";
import letterIcon from "/Vectores/letter_white.svg";
import checkedIcon from "/Vectores/Checked_white.svg";

const OurServicesSlice = createSlice({ 
    name: "ourServices",
    initialState: [
        letterIcon,
        peopleIcon,
        checkedIcon,
        letterIcon,
        peopleIcon,
        checkedIcon,
    ],
    reducers: {
        TotheRight: (state) => {
            const updatedIconsToRender = [...state];
    const newFirstIcon = updatedIconsToRender.pop();
    updatedIconsToRender.unshift(newFirstIcon as any);
    return updatedIconsToRender;
     },
    
     TotheLeft: (state) => {
        const updatedIconsToRender = [...state];
        const newLastIcon = updatedIconsToRender.shift();
        updatedIconsToRender.push(newLastIcon as any);
        return updatedIconsToRender;
    }, 
}});

export const { TotheRight, TotheLeft } = OurServicesSlice.actions;
export default OurServicesSlice.reducer;

