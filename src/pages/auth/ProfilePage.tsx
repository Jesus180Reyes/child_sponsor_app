import { useNavigate } from 'react-router-dom';
import { alertDialog } from '../../helpers/alertDialog';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const {status} = useSelector((state:any)=> state.auth);
    const isUserAuthenticated = () => {
        if(status === "Not-Authenticated") {
          alertDialog("You need to Login","You need to login to see the respective page.", "error");
          return navigate("/auth/login");
          
        } 
    }
    useEffect(() => {
    isUserAuthenticated();
    
      
    }, []);
    
  return (
    <div>ProfilePage</div>
  )
}
