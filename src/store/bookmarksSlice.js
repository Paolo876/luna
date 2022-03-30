import { createSlice } from "@reduxjs/toolkit";
import initialConfigurations from "./initialConfigurations";
import generateUID from "../utils/generate-uid.js"
import validateInput from "../utils/validate-input"
let initBookmarksConfig = JSON.parse(localStorage.getItem('bookmarksConfig'));

if(initBookmarksConfig === null) {
    initBookmarksConfig = initialConfigurations("bookmarksList");
    localStorage.setItem('bookmarksConfig', JSON.stringify(initBookmarksConfig));
} 

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        bookmarksList: initBookmarksConfig
    },
    reducers: {
        addBookmarks(state, {payload}){
            // favicon check
            let favIcon;
            if(!validateInput(payload.data.favicon, "url")){
                const origin = new URL(payload.url).origin;
                favIcon = origin + payload.data.favicon
            } else {
                favIcon = payload.data.favicon
            }
            const newItem =       
            {url: payload.url ,title: payload.data.title, favicon: favIcon, id: generateUID()};
            console.log(newItem)
            state.bookmarksList.push(newItem)

            localStorage.setItem('bookmarksConfig', JSON.stringify(state.bookmarksList));

        },
        deleteBookmark(state, {payload}){
            state.bookmarksList = state.bookmarksList.filter(item => item.id !== payload)
            localStorage.setItem('bookmarksConfig', JSON.stringify(state.bookmarksList));

        }
    }
})


export const bookmarksActions = bookmarksSlice.actions;
export default bookmarksSlice;
