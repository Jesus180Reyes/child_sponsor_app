import { configureStore } from '@reduxjs/toolkit'
import { childSlice } from '../slices/child/childSlice';
import { authSlice } from '../slices/auth/authSlice';

export const store = configureStore({
  reducer: {
    child: childSlice.reducer,
    auth: authSlice.reducer,
  },
})