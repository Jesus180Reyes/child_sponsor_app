import { CustomFormAuth } from "../../components/auth/CustomFormAuth"
import { Navbar } from "../../shared"
import { useAuth } from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { nameRegister,setNameRegister,lastName,setLastName,addressRegister,setAddressRegister,phoneNumberRegister,setPhoneNumberRegister,emailRegister,setEmailRegister,passwordRegister,setPasswordRegister,registerUserAuth} = useAuth();
   const registerInputData = [ 
    {
      title: "Name",
      type: "text",
      value: nameRegister,
      onChange: setNameRegister, 
    },
    
    {
      title: "Last Name",
      type: "text",
      value: lastName,
      onChange: setLastName,
    },
    {
      title: "Address",
      type: "text",
      value: addressRegister,
      onChange: setAddressRegister
    },
    {
      title: "Phone Number",
      type: "number",
      value: phoneNumberRegister,
      onChange: setPhoneNumberRegister
    },
    {
      title: "Email",
      type: "email",
      value: emailRegister,
      onChange: setEmailRegister
  
    },
    {
      title: "Password",
      type: "password",
      value: passwordRegister,
      onChange: setPasswordRegister,
    },
  
  
  ];
  const onSubmit = async(e:any)=> {
    e.preventDefault();
    await registerUserAuth();
    navigate("/auth/profile", {replace: true});
    setNameRegister("");
    setLastName("");
    setAddressRegister("");
    setPhoneNumberRegister("");
    setEmailRegister("");
    setPasswordRegister("");
    
  }
  return (
    <>
    <Navbar/>
    <div className="loginAuth-container">
      <CustomFormAuth title="Register" inputs={registerInputData} onSubmit={onSubmit} label="Do have account? Sign In" route="/auth/login"/>
    </div>
    </>
  )
}
