import moment from "moment"
import { Row } from "../../interfaces/ChildsResponse"
import { FC } from 'react';
import { useNavigate } from "react-router-dom";
interface Props {
    childCart:Row[],
}
export const ChildCartComponent:FC<Props> = ({childCart}) => {
  const navigate = useNavigate();
  return (
    <>
    <div className="cart-card">
      <h1>Cart</h1>
      <h1>Price</h1>
    </div>
    <hr/>
    {
    childCart.map((child:Row,i) => {
          return <div className="products-box" key={i}>
          <div className="image-box-cart">
            <img src={child.imgSrc} alt={child.name} />
          </div>
          <div className="col-product-details">
            <h3>Child Name: {child.name}</h3>
            <p>CHildID: {child.code}</p>
            <p>BirthDay: {moment(child.birthday).format("MMM Do")}</p>
            <p>Gender: {child.gender}</p>
          </div>
          <div className="price-child">
            <h4>US$38.00</h4>
          </div>
        </div>
        })  
      }
      <div className="payment-box">
        <p>Subtotal ({childCart.length} children) </p><h1>US${38.00 * childCart.length}.00</h1>
        <button onClick={()=> navigate("/payment")}>Proceder al pago</button>
      </div>
    </>
  )
}
