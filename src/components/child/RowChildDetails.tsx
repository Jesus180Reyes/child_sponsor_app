import moment from "moment"
import {  Row } from '../../interfaces/ChildsResponse';
import { FC } from 'react';

interface Props {
    childResponse: Row;
    currentChildName:string
}
export const RowChildDetails:FC<Props> = ({childResponse,currentChildName}) => {
  return (
    <>
    <div className="row-child-details">
        <div className="box-img">
        <img src={childResponse.imgSrc} alt="" />
        <p>Daniel has been <span>waiting { moment(childResponse.createdAt).startOf('day').fromNow()}</span> for a sponsor.</p>
        </div>
        <div className="col-details">
          <h1>{currentChildName}</h1>
          <p>{currentChildName} is anxiously waiting for a sponsor. He needs your support of <span>$38/month</span> to have new opportunities to learn and grow physically, mentally and spiritually.</p>
          <h3>AGE: {childResponse.currentAge}</h3>
          <h3>BIRTHDAY: {moment(childResponse.birthday).format('LL')}</h3>
          <h3>Gender: {childResponse.gender}</h3>
          <h3>LOCATION: {childResponse.community}</h3>
          <h3>CHILD ID: {childResponse.code}</h3>
          <button className='btn-sponsorChild'>SPONSOR {currentChildName}</button>
        </div>
      </div>
    
    </>
  )
}
