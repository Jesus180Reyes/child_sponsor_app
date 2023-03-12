import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';

export const ChildDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(!location.state) return navigate("/");   
    
    
  }, []);
  const currentChildName = location.state.name[0].toUpperCase() + location.state.name.slice(1).toLowerCase();
  document.title = `Sponsor ${currentChildName} from ${location.state.community}`;
  return (
   <>
    <div className="child-details-container animate__animated animate__fadeIn">
      <div className="row-child-details">
        <div className="box-img">
        <img src="https://cdn.conmebol.com/wp-content/uploads/2018/01/roe_.jpg" alt="" />
        <p>Daniel has been <span>waiting { moment(location.state.createdAt).startOf('day').fromNow()}</span> for a sponsor.</p>
        </div>
        <div className="col-details">
          <h1>{currentChildName}</h1>
          <p>{currentChildName} is anxiously waiting for a sponsor. He needs your support of <span>$38/month</span> to have new opportunities to learn and grow physically, mentally and spiritually.</p>
          <h3>AGE: {location.state.currentAge}</h3>
          <h3>BIRTHDAY: {moment(location.state.birthday).format('LL')}</h3>
          <h3>Gender: {location.state.gender}</h3>
          <h3>LOCATION: {location.state.community}</h3>
          <h3>CHILD ID: {location.state.code}</h3>
          <button className='btn-sponsorChild'>SPONSOR {currentChildName}</button>
        </div>
      </div>
    </div>
   </>
  )
}
