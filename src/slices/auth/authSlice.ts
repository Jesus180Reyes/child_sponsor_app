import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
name: 'auth',
initialState: {
status: "Not-Authenticated",
user: {}
},
reducers: {
    login: (state, /* action */ ) => {
},
    registerUser: (state) => {

},
    logOut: (state) => {

},
}
});
export const { login,registerUser,logOut } = authSlice.actions;