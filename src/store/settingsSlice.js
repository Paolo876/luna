import { createSlice } from "@reduxjs/toolkit";
import initialConfigurations from "./initialConfigurations";

let initComponentsConfig = JSON.parse(localStorage.getItem('componentsConfig'));
let initlocationConfig = JSON.parse(localStorage.getItem('locationConfig'));
let initUIConfig = JSON.parse(localStorage.getItem('uiConfig'));

if(initComponentsConfig === null) {
    initComponentsConfig = initialConfigurations("components")
    localStorage.setItem('componentsConfig', JSON.stringify(initComponentsConfig));
} 
if(initlocationConfig === null) {
    initlocationConfig = { isGeolocationAllowed: null}
    localStorage.setItem('locationConfig', JSON.stringify(initlocationConfig));

}
if(initUIConfig === null) {
    initUIConfig = initialConfigurations("ui")
    localStorage.setItem('uiConfig', JSON.stringify(initUIConfig));
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        // background: initBgConfig,
        components: initComponentsConfig,
        editorMode: { isActive: false, changeComponentPosition: [] },
        location: initlocationConfig,
        ui: initUIConfig
    },
    reducers: {
        // components
        setIsVisible(state, {payload}){
            const component = state.components.find(item => item.name === payload);
            component.isVisible = !component.isVisible;
            localStorage.setItem('componentsConfig', JSON.stringify(state.components));
        },
        changeStyle(state, {payload}){
            const component = state.components.find(item => item.name === payload.name);
            if(!component.addedStyles)  component.addedStyles = {};
            if(payload.id === "font")   component.addedStyles.fontFamily = payload.font;
            if(payload.id === "weight") component.addedStyles.fontWeight = payload.weight;
            if(payload.id === "color")  component.addedStyles.color = payload.color;
            if(payload.id === "opacity")component.addedStyles.opacity = payload.opacity;

            localStorage.setItem('componentsConfig', JSON.stringify(state.components));
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
            state.components.forEach(item => delete item.addedStyles.transform);
            state.editorMode.isActive = false;
            state.editorMode.changeComponentPosition = []
            localStorage.setItem('componentsConfig', JSON.stringify(state.components));

        },
        // UI
        toggleGeolocation(state, {payload}){
            state.location.isGeolocationAllowed = payload;
            localStorage.setItem('locationConfig', JSON.stringify(state.location))
        },
        changeContainerColor(state, {payload}){
            const colors = payload.color
            const value = `linear-gradient(rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}), rgba(${colors.r}, ${colors.g}, ${colors.b}, ${payload.alpha}))`;
            state.ui.containerColor = value;
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        },
        changeSettingsButtonPosition(state, {payload}){
            state.ui.settingsPosition = payload;
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        },
        changePrimaryColor(state, {payload}){
            state.ui.primaryColor = payload;
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))

        }, 
        resetUISettings(state){
            state.ui = initialConfigurations("ui");
            localStorage.setItem('uiConfig', JSON.stringify(state.ui))
        },
        //CLEAR SETTINGS
        clearAllSettings(state){
            localStorage.clear();
            window.location.reload();
        },
    },
});


export const settingsActions = settingsSlice.actions;
export default settingsSlice;