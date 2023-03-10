import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>

     <RouterProvider router={router} />
    <App />
    </Provider>
  </React.StrictMode>,
);
