import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ChildDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
  if(!location.state) return navigate("/");   
  
    
  }, []);
  
  return (
   <>
   <h1>{JSON.stringify(location.state)}</h1>
   </>
  )
}
