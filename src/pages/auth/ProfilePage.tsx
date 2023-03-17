import { useNavigate } from 'react-router-dom';
import { alertDialog } from '../../helpers/alertDialog';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navbar } from '../../shared';
import { useAuth } from './hooks/useAuth';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const {status,user} = useSelector((state:any)=> state.auth);
    const {logOutUserAuth} = useAuth();
    const isUserAuthenticated = () => {
      if(status === "Not-Authenticated") return navigate("/auth/login"); 
    }
    useEffect(() => {
    isUserAuthenticated();
    
      
    }, [status]);
    
  return (
    <>
    <Navbar/>
    <h1>{status}</h1>
    <h1>{JSON.stringify(user)}</h1>
    <button onClick={()=> logOutUserAuth()}>Sing Out</button>
    </>
  )
}
