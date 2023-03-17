import { CustomFormAuth } from "../../components/auth/CustomFormAuth"
import { Navbar } from "../../shared"
import { useState } from 'react';
import { alertDialog } from "../../helpers/alertDialog";

export const RegisterPage = () => {
  const [nameRegister, setNameRegister] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [addressRegister, setAddressRegister] = useState<string>("");
  const [phoneNumberRegister, setPhoneNumberRegister] = useState<string>("");
  const [emailRegister, setEmailRegister] = useState<string>("");
  const [passwordRegister, setPasswordRegister] = useState<string>("");
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
  const onSubmit = (e:any)=> {
    e.preventDefault();
    alertDialog("LOGIN", `nameRegister
    ${lastName},
    ${addressRegister},
    ${emailRegister},
    ${passwordRegister},`, "success");
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
