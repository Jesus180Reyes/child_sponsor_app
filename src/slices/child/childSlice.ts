import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const childSlice = createSlice({
    
name: 'child',
initialState: {
childs: {gender: "either"},
},
reducers: {
onGetchilds: (state, action  ) => {
    state.childs = action.payload;
},
}
});
export const { onGetchilds } = childSlice.actions;