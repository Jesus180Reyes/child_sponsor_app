import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, onIsLoading, registerUser } from "../../../slices/auth/authSlice";
import { alertDialog } from '../../../helpers/alertDialog';
import { hostApi } from '../../../api/hostApi';

export const useAuth = () => {
  const dispatch = useDispatch();
  // Login
  const {user,status,isLoading} = useSelector((state:any) => state.auth);
  const [emailAuth, setEmailAuth] = useState<string>("");
  const [passwordAuth, setPasswordAuth] = useState<string>("");

  // REGISTER
  const [nameRegister, setNameRegister] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [addressRegister, setAddressRegister] = useState<string>("");
  const [phoneNumberRegister, setPhoneNumberRegister] = useState<string>("");
  const [emailRegister, setEmailRegister] = useState<string>("");
  const [passwordRegister, setPasswordRegister] = useState<string>("");

  const loginUserAuth = async ()=> {
    try {
      dispatch(onIsLoading(true));
      const resp = await hostApi.post("/auth",{email:emailAuth.trim(), password:passwordAuth.trim()});
      const {data} = resp;
      dispatch(login({uid: data.sponsor.uid,name:data.sponsor.name,lastName:data.sponsor.lastName,email: data.sponsor.email}));
      dispatch(onIsLoading(false));
    } catch (error:any) {
      console.error(error);
      dispatch(onIsLoading(false));
     return alertDialog("Login error", error.response.data.msg, "error");
    }
   
  }

  const registerUserAuth = async() => {
    const registerFormData = {
      name:nameRegister.trim(),
      lastName:lastName.trim(),
      address:addressRegister.trim(),
      phone_number:phoneNumberRegister.trim(),
      email:emailRegister.trim(),
      password:passwordRegister.trim(),
    }
    try {
      dispatch(onIsLoading(true));
      const  resp = await hostApi.post("/sponsors",registerFormData);
      const {data } = resp;
      console.log(data);
      dispatch(registerUser({uid: data.sponsor.uid,name:data.sponsor.name, lastName: data.sponsor.lastName,email:data.sponsor.email}));
      dispatch(onIsLoading(false));
      alertDialog(data.msg,"", "success");
      
    } catch (error:any) {
      console.error(error);
      dispatch(onIsLoading(false));
    return alertDialog("Something was wrong",error.response.data.msg, "error");
    }
    
  }

  const logOutUserAuth = () => {
    dispatch(logOut());
  } 
  return {
    // * Propiedades
    emailAuth,
    passwordAuth,
    nameRegister,
    lastName,
    addressRegister,
    phoneNumberRegister,
    emailRegister,
    passwordRegister,
    user,
    status,
    isLoading,
    
    // * Metodos
    setEmailAuth,
    setPasswordAuth,
    loginUserAuth,
    logOutUserAuth,
    setNameRegister,
    setLastName,
    setAddressRegister,
    setPhoneNumberRegister,
    setEmailRegister,
    setPasswordRegister,
    registerUserAuth
  }
  
}
