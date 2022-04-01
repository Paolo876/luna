import { configureStore } from '@reduxjs/toolkit'; 
import todoSlice from './todoSlice';
import userSlice from './userSlice';
import settingsSlice from './settingsSlice';
import bookmarksSlice from './bookmarksSlice';
import backgroundSlice from "./backgroundSlice";

const store = configureStore({
    reducer: {  
                background: backgroundSlice.reducer,
                todos: todoSlice.reducer, 
                user: userSlice.reducer, 
                settings: settingsSlice.reducer, 
                bookmarks: bookmarksSlice.reducer
            }
});

export default store;