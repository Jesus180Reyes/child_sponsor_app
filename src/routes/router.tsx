import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { HomePage } from '../pages/HomePage';
import { ChildsPage } from '../pages/child/ChildsPage';
import { ChildDetails } from '../pages/child/ChildDetails';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';


export const router = createBrowserRouter([
  {
      path:'/',
      element: <App/>,
      children: [
          {
              index: true,
              element: <HomePage/>
          },
          {
              path: "childs",
              element: <ChildsPage/>
          },
          {
              path: "childDetails",
              element: <ChildDetails/>
          },
          
            { path: '*', element: <Navigate to="/" /> },
        ],
        
    },
    {
        path: "/auth",
        element: <App/>,
        children: [
            {path: "login",element: <LoginPage/>},
            {path: "register",element: <RegisterPage/>},
            { path: '*', element: <Navigate to="/auth" /> },
            {element: <LoginPage/>, index:true},
        ]
        
    },
 

]);