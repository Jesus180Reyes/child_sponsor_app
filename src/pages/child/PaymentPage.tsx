import { useEffect } from 'react';
import { useAuth } from '../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../shared';

export const PaymentPage = () => {
    const {status} = useAuth();
    const navigate = useNavigate()
    const isUserAuthenticated = ():void=> {
        if(status !== "Authenticated") return navigate("/auth/login"); 
    }
    useEffect(() => {
      isUserAuthenticated()
    
      
    }, [status]);
  return (
    
    <>
    <h1>Payment Page</h1>
    <Footer/>
    </>
  )
}
