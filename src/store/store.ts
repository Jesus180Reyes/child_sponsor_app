import { configureStore } from '@reduxjs/toolkit'
import { childSlice } from '../slices/child/childSlice';
import { authSlice } from '../slices/auth/authSlice';

const reduxDevtoolDisplay = () => {
  if(import.meta.env.VITE_REDUX_DEVTOOL_STATUS === "prod") return false
  return true
}
export const store = configureStore({
  reducer: {
    child: childSlice.reducer,
    auth: authSlice.reducer,
  },
  devTools: reduxDevtoolDisplay(),
})