import { CustomFormAuth } from "../../components/auth/CustomFormAuth"
import { Navbar } from "../../shared"
import "./index.css"
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
  const navigate = useNavigate();
    const {emailAuth,status,passwordAuth,setEmailAuth,setPasswordAuth,loginUserAuth} = useAuth();
   const loginInputData = [ 
    {
      title: "Email",
      type: "email",
      value: emailAuth,
      onChange: setEmailAuth

    },
    {
      title: "Password",
      type: "password",
      value: passwordAuth,
      onChange: setPasswordAuth
    },
  

];
useEffect(() => {
    if(status === "Authenticated") return navigate("/");
  
}, []);

const onSubmit = async(e:any)=> {
  e.preventDefault();
  if(emailAuth.length <=1) return;
  if(passwordAuth.length <=1) return;
  setEmailAuth("");
  setPasswordAuth("");
 await loginUserAuth();
  navigate("/auth/profile", {replace: true});
}
 
  return (
    <>
    <Navbar/>
    <div className="loginAuth-container animate__animated animate__fadeIn">
      <CustomFormAuth title="Login" inputs={loginInputData} onSubmit={onSubmit} label="You don't have a account? Sign on." route="/auth/register" />
    </div>
    </>
  )
}
