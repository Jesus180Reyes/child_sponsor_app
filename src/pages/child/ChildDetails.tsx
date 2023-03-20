import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RowChildDetails } from '../../components/';
import { Navbar } from '../../shared/Navbar';
import { Footer } from '../../shared';

export const ChildDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(!location.state) return navigate("/");   
    window.scrollTo(0, 0);
    
  }, []);
  const currentChildName:string = location.state.name[0].toUpperCase() + location.state.name.slice(1).toLowerCase();
  document.title = `Sponsor ${currentChildName} from ${location.state.community}`;
  return (
   <>
   <Navbar/>
    <div className="child-details-container animate__animated animate__fadeIn">
     <RowChildDetails childResponse={location.state} currentChildName={currentChildName}/>
    </div>
    <Footer/>
   </>
  )
}
