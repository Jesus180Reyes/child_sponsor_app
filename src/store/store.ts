import { configureStore } from '@reduxjs/toolkit'
import { childSlice } from '../slices/child/childSlice';

export const store = configureStore({
  reducer: {
    child: childSlice.reducer,
  },
})