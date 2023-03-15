import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { alertDialog } from '../../helpers/alertDialog';

export const ChildCart = () => {
  const {status} = useSelector((state:any) => state.auth);
  const  navigate = useNavigate();
  const isUserAuthenticated = () => {
    if(status === "Not-Authenticated") {
      alertDialog("You need to Login","You need to login to see the respective page.", "error");
      navigate("/auth") ;

    } 
  }
  useEffect(() => {
  isUserAuthenticated();
    
  }, [])
  
  return (
    <div>ChildCart</div>
  )
}
