import { createSlice } from "@reduxjs/toolkit";
import initialConfigurations from "./initialConfigurations";
let initBackgroundConfig = JSON.parse(localStorage.getItem('backgroundConfig'));

if(!initBackgroundConfig){
    initBackgroundConfig = initialConfigurations("background");
    localStorage.setItem('backgroundConfig', JSON.stringify(initBackgroundConfig));
} 

const backgroundSlice = createSlice({
    name: "background",
    initialState: initBackgroundConfig,
    reducers: {
        generateLocalBackground(state, { payload }){
            const images = require.context("../assets", true);
            let generatedImg
            if(payload != null) {
                generatedImg = images(`./bg_${payload}.jpg`);
            } else {
                generatedImg = images(`./bg_default_${ Math.floor(Math.random() * 5) + 1 }.jpg`);
            }
            state.source = generatedImg;
        },
        setBackground(state, {payload = true}){
            state.isRandom = !payload;    
            localStorage.setItem('backgroundConfig', JSON.stringify(state))
        },
        removeBackground(state){
            state.isRandom = true;
            state.source = null;
            localStorage.setItem('backgroundConfig', JSON.stringify(state))
        },
        setIsLocalBackground(state, {payload}){
            state.isLocal = payload;
            localStorage.setItem('backgroundConfig', JSON.stringify(state))
        },
        setFetchedBackground(state, {payload}){
            state.source = payload
        },
        changeFilter(state, {payload}){
            const filters = state.filter;

            if(payload.id === "brightness") filters.brightness = payload.value;  
            if(payload.id === "contrast") filters.contrast = payload.value;
            if(payload.id === "saturate") filters.saturate = payload.value;
            if(payload.id === "reset") state.filter = initialConfigurations("background").filter;
        
            localStorage.setItem('backgroundConfig', JSON.stringify(state))

        },
    }, 
})

export const backgroundActions = backgroundSlice.actions;
export default backgroundSlice;