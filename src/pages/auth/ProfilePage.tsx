import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoadingPage, Navbar } from '../../shared';
import { useAuth } from './hooks/useAuth';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const {logOutUserAuth,isLoading,user,status} = useAuth();
    const isUserAuthenticated = () => {
      if(status === "Not-Authenticated") return navigate("/auth/login"); 
    }
    useEffect(() => {
    isUserAuthenticated();
    
      
    }, [status]);
    if(isLoading) return (<LoadingPage/>);
    document.title = `${user.name} ${user.lastName} | Dashboard`
  return (
    <>
    <Navbar/>
    <h1>{status}</h1>
    <h1>{JSON.stringify(user)}</h1>
    <button onClick={()=> logOutUserAuth()}>Sing Out</button>
    </>
  )
}
