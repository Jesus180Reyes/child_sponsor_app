import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, onIsLoading } from "../../../slices/auth/authSlice";
import { alertDialog } from '../../../helpers/alertDialog';
import { hostApi } from '../../../api/hostApi';

export const useAuth = () => {
  const dispatch = useDispatch();
  const {user,status,isLoading} = useSelector((state:any) => state.auth);
  const [emailAuth, setEmailAuth] = useState<string>("");
  const [passwordAuth, setPasswordAuth] = useState<string>("");


  const loginUserAuth = async ()=> {
    try {
      dispatch(onIsLoading(true));
      const resp = await hostApi.post("/auth",{email:emailAuth, password:passwordAuth});
      const {data} = resp;
      dispatch(login({name:data.sponsor.name,lastName:data.sponsor.lastName,email: data.sponsor.email}));
      dispatch(onIsLoading(false));
    } catch (error:any) {
      console.error(error);
      dispatch(onIsLoading(false));
     return alertDialog("Login error", error.response.data.msg, "error");
    }
   
  }

  const registerUserAuth = () => {
    
  }

  const logOutUserAuth = () => {
    dispatch(logOut());
  } 
  return {
    // * Propiedades
    emailAuth,
    passwordAuth,
    user,
    status,
    isLoading,
    
    // * Metodos
    setEmailAuth,
    setPasswordAuth,
    loginUserAuth,
    logOutUserAuth,
  }
  
}
