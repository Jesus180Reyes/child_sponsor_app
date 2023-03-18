import { createBrowserRouter, Navigate } from "react-router-dom";
import { App } from "../App";
import { HomePage,ChildCart,SearchChild,ChildDetails,ChildsPage,PaymentPage } from '../pages/child/';
import { LoginPage,RegisterPage,ProfilePage } from '../pages/auth/';


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
          {
              path: "search",
              element: <SearchChild/>
          },
          {
              path: "cart",
              element: <ChildCart/>
          },
          {
              path: "payment",
              element: <PaymentPage/>
          },
          
            { path: '*', element: <Navigate to="/" /> },
        ],
        
    },
    {
        path: "auth",
        element: <App/>,
        children: [
            {path: "login",element: <LoginPage/>},
            {path: "register",element: <RegisterPage/>},
            {path: "profile",element: <ProfilePage/>},
            { path: '*', element: <Navigate to="/auth/login" /> },
            {element: <LoginPage/>, index:true},
        ]
        
    },
 

]);