import { Navbar } from '../../shared';
import { useSelector } from 'react-redux';
import { ChildCartComponent } from '../../components/';
import { useNavigate } from 'react-router-dom';

export const ChildCart = () => {
  const navigate = useNavigate();
  const {childCart} = useSelector((state:any) => state.child);
  document.title = `Cart | ${childCart.length} children on the cart`;
  if(!childCart.length) return <h1>No itemds registered, add one </h1>
  return (
    <>
    <Navbar/>
    <div className="cart-container animate__animated animate__fadeIn">
      <div className="cart-card">
      <h1>Cart</h1>
      <h1>Price</h1>
      </div>
      <hr/>
      <ChildCartComponent childCart={childCart}/>
      <div className="payment-box">
        <p>Subtotal ({childCart.length} children) <h1>US${38.00 * childCart.length}.00</h1></p>
        <button onClick={()=> navigate("/payment")}>Proceder al pago</button>
      </div>
      
    </div>
  
    </>
  )
}
