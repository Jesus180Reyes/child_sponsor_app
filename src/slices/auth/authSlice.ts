import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
name: 'auth',
initialState: {
status: "Not-Authenticated",
user: {},
isLoading: false,
},
reducers: {
    login: (state, {payload} ) => {
    state.status = "Authenticated";
    state.user = payload;

},
    registerUser: (state, {payload}) => {
    state.status = "Authenticated"
    state.user = payload
},
    logOut: (state) => {
    state.status = "Not-Authenticated"
    state.user = {};
},
    onIsLoading: (state,{payload}) => {
        state.isLoading = payload;
    }
}
});
export const { login,registerUser,logOut,onIsLoading } = authSlice.actions;