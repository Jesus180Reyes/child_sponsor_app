import moment from "moment"
import {  Row } from '../../interfaces/ChildsResponse';
import { FC } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onChildCartAdded } from "../../slices/child/childSlice";
import { useChild } from '../../pages/child/hooks/useChild';
import { alertDialog } from '../../helpers/alertDialog';

interface Props {
    childResponse: Row;
    currentChildName:string
}
export const RowChildDetails:FC<Props> = ({childResponse,currentChildName}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {childCart} = useChild();
  const onChildSelected =async () =>  {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure you want to select this child?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, choose it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Added to cart!',
          'Child added to the cart.',
          'success'
        );
        navigate("/cart");
        dispatch(onChildCartAdded(childResponse));

      }
    }).then()


  }
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
          <button className='btn-sponsorChild' onClick={onChildSelected}>SPONSOR {currentChildName}</button>
        </div>
      </div>
    
    </>
  )
}
