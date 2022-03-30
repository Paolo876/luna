import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import initialConfigurations from "./initialConfigurations";

let initBgConfig = JSON.parse(localStorage.getItem('backgroundConfig'));
let initComponentsConfig = JSON.parse(localStorage.getItem('componentsConfig'));
let initlocationConfig = JSON.parse(localStorage.getItem('locationConfig'));
let initUIConfig = JSON.parse(localStorage.getItem('uiConfig'));

if(initBgConfig === null) {
    initBgConfig = initialConfigurations("background");
    localStorage.setItem('backgroundConfig', JSON.stringify(initBgConfig));
} 
if(initComponentsConfig === null) {
    initComponentsConfig = initialConfigurations("components")
    localStorage.setItem('componentsConfig', JSON.stringify(initComponentsConfig));
} 
if(initlocationConfig === null) {
    initlocationConfig = {geolocationAllowed: null}
    localStorage.setItem('locationConfig', JSON.stringify(initlocationConfig));

}
if(initUIConfig === null) {
    initUIConfig = initialConfigurations("ui")
    localStorage.setItem('uiConfig', JSON.stringify(initUIConfig));
}

export const fetchBackground = createAsyncThunk(
    'fetchBackground', async () => {
        return fetch(`https://source.unsplash.com/1920x1080/?wallpapers`)
        .then( data => {
            return data.url
        })
    }
)

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        background: initBgConfig,
        components: initComponentsConfig,
        editorMode: {isActive: false, changeComponentPosition: []},
        location: initlocationConfig,
        ui: initUIConfig
    },
    reducers: {
        // background
        generateBackground(state, {payload}){
            const images = require.context("../assets", true);
            let generatedImg
            if(payload != null) {
                generatedImg = images(`./bg_${payload}.jpg`);
            } else {
                generatedImg = images(`./bg_default_${ Math.floor(Math.random() * 5) + 1 }.jpg`);
            }

            state.background.source = generatedImg;
        },
        setBackground(state, {payload = true}){
            state.background.isSet = payload;    
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },
        removeBackground(state){
            state.background.isSet = false;
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },
        setIsLocalBackground(state, {payload}){
            state.background.isLocalBg = payload;
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))
        },

        // components
        setIsVisible(state, {payload}){
            const component = state.components.find(item => item.name === payload);
            component.isVisible = !component.isVisible;
            localStorage.setItem('componentsConfig', JSON.stringify(state.components))
        },
        changeStyle(state, {payload}){
            const component = state.components.find(item => item.name === payload.name);
            if(!component.addedStyles){
                component.addedStyles = {};
            }

            if(payload.id === "font"){
                component.addedStyles.fontFamily = payload.font;
            }

            if(payload.id === "weight"){
                component.addedStyles.fontWeight = payload.weight;
            }

            if(payload.id === "color"){
                component.addedStyles.color = payload.color;
            }

            if(payload.id === "opacity"){
                component.addedStyles.opacity = payload.opacity;
            }

            localStorage.setItem('componentsConfig', JSON.stringify(state.components))
        },
        resetStyle(state, {payload}){
            const defaultValues = initialConfigurations("components").find(item => item.name === payload);
            const component = state.components.find(item => item.name === payload);

            component.addedStyles = defaultValues.addedStyles

            localStorage.setItem('componentsConfig', JSON.stringify(state.components))
        },
        // editor mode
        toggleEditorMode(state, {payload}){
            state.editorMode.isActive = payload;
            state.editorMode.changeComponentPosition = [];
   
        },
        changeComponentPosition(state, {payload}){
            const index = state.editorMode.changeComponentPosition.findIndex(item => item.id === payload.id);
            if(index === -1) {
                state.editorMode.changeComponentPosition.push(payload);
            } else {
                state.editorMode.changeComponentPosition[index].transform = payload.transform;
            }
        },
        saveComponentPositions(state){
            const updatedComponents = state.editorMode.changeComponentPosition;

            updatedComponents.forEach(item => {
                const index = state.components.findIndex(i => i.name === item.id);
                if(index !== -1){
                    state.components[index].addedStyles.transform = item.transform;
                }
            })
            state.editorMode.changeComponentPosition = [];
            state.editorMode.isActive = false;
            localStorage.setItem('componentsConfig', JSON.stringify(state.components));

        },
        resetComponentPositions(state){
            state.components.forEach(item => {
                delete item.addedStyles.transform;
            });
            state.editorMode.isActive = false;
            state.editorMode.changeComponentPosition = []
            localStorage.setItem('componentsConfig', JSON.stringify(state.components));

        },
        // UI
        toggleGeolocation(state, {payload}){
            state.location.geolocationAllowed = payload;
            localStorage.setItem('locationConfig', JSON.stringify(state.location))
        },
        changeFilter(state, {payload}){
            const stateFilters = state.background.filter;
            if(payload.id === "brightness"){
                stateFilters.brightness = payload.value;
            }
            if(payload.id === "contrast"){
                stateFilters.contrast = payload.value;
            }
            if(payload.id === "saturate"){
                stateFilters.saturate = payload.value;
            }
            localStorage.setItem('backgroundConfig', JSON.stringify(state.background))

        },
        changeContainerColor(state, {payload}){
            const colors = payload.color
            const value = `linear-gradient(rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}), rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}))`;
            state.ui.containerColor = value;
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        },
        changePrimaryColor(state, {payload}){
            state.ui.primaryColor = payload;
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        },
        //CLEAR SETTINGS
        clearAllSettings(state){
            localStorage.clear();
            window.location.reload();
        },
    },
    extraReducers:{
        // [fetchBackground.pending]: (state, action) => {
        //     state.status = 'loading'
        // },
        [fetchBackground.fulfilled] : (state, {payload}) => {
            state.background.isSet = false;
            state.background.source = payload

            const updateStorage = {...state.background}
            updateStorage.isSet = false;
            updateStorage.source = payload;
            localStorage.setItem('backgroundConfig', JSON.stringify(updateStorage))

        }
    }
});


export const settingsActions = settingsSlice.actions;
export default settingsSlice;