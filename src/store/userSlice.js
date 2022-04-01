import { createSlice } from "@reduxjs/toolkit";
let initUserInfo = JSON.parse(localStorage.getItem('userInfo'));

if(!initUserInfo) {
    initUserInfo = { name: null, birthday: null, };
    localStorage.setItem('userInfo', JSON.stringify(initUserInfo));
} 
const userSlice = createSlice({
    name: "user",
    initialState: initUserInfo,
    reducers: {
        setUserName(state, action){
            state.name = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state))
        },

        setBirthday(state, action){
            state.birthday = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state));
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;