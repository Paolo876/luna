import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialConfigurations from "./initialConfigurations";
let initBackgroundConfig = JSON.parse(localStorage.getItem('backgroundConfig'));

if(!initBackgroundConfig){
    initBackgroundConfig = initialConfigurations("background");
    localStorage.setItem('backgroundConfig', JSON.stringify(initBackgroundConfig));
} 

// export const fetchBackground = createAsyncThunk(
//     'fetchBackground', async () => {
//         return fetch(`https://source.unsplash.com/1920x1080/?wallpapers`)
//         .then( data => {
//             return data.url
//         })
//     }
// )

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
            state.isSet = payload;    
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },
        removeBackground(state){
            state.isSet = false;
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },
        setIsLocalBackground(state, {payload}){
            state.isLocalBg = payload;
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },
    }, 
    // extraReducers:{
    //         // [fetchBackground.pending]: (state, action) => {
    //         //     state.status = 'loading'
    //         // },
    //         [fetchBackground.fulfilled] : (state, {payload}) => {
    //             state.isSet = false;
    //             state.source = payload
    
    //             const updateStorage = {...state}
    //             updateStorage.isSet = false;
    //             updateStorage.source = payload;
    //             localStorage.setItem('backgroundConfig', JSON.stringify(updateStorage))
    
    //         }
    //     }
    

    }
)

export const backgroundActions = backgroundSlice.actions;
export default backgroundSlice;