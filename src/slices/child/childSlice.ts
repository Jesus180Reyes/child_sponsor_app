import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const childSlice = createSlice({
    
name: 'child',
initialState: {
childs: {gender: "either"},
childCart: [], 
},
reducers: {
onGetchilds: (state, action  ) => {
    state.childs = action.payload;
},
onChildCartAdded: (state,action:PayloadAction) => {
    state.childCart.push(action.payload!);
}
}
});
export const { onGetchilds,onChildCartAdded } = childSlice.actions;