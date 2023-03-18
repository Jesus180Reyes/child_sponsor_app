import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { alertDialog } from '../../helpers/alertDialog';
import { Row } from '../../interfaces/ChildsResponse';

// Define a type for the slice state
interface ChildState {
    childs: any,
    childCart: Row[]
  }
  const initialState: ChildState = { 
    childs: {gender: "either"},
    childCart: []
  }
export const childSlice = createSlice({
    
name: 'child',
initialState,
reducers: {
onGetchilds: (state, action  ) => {
    state.childs = action.payload;
},
onChildCartAdded: (state,action:PayloadAction<Row>) => {
    state.childCart.map(e => {
    if(action.payload.uid === e.uid) {
      alertDialog("Este child ya esta agregado", "ya esta agregado", "error");
      return;
    }
    
    
  })
  state.childCart.push(action.payload);
 
}
}
});
export const { onGetchilds,onChildCartAdded } = childSlice.actions;