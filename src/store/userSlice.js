import { createSlice } from "@reduxjs/toolkit";

let initUserInfo = JSON.parse(localStorage.getItem('userInfo'));

if(initUserInfo === null) {
    initUserInfo = {name: "", birthday: "", };
    localStorage.setItem('userInfo', JSON.stringify(initUserInfo));
} 
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: initUserInfo
    },
    reducers: {
        setUserName(state, action){
            state.userInfo.name = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
        },

        setBirthday(state, action){
            state.userInfo.birthday = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;