import { Navbar } from '../../shared';
import { useSelector } from 'react-redux';
import { ChildCartComponent } from '../../components/child/ChildCartComponent';

export const ChildCart = () => {
  const {childCart} = useSelector((state:any) => state.child);
  document.title = `Cart | ${childCart.length} children on the cart`;
  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <div className="cart-card">
      <h1>Cart</h1>
      <h1>Price</h1>
      </div>
      <hr/>
      <ChildCartComponent childCart={childCart}/>
      <div className="payment-box">
        <p>Subtotal ({childCart.length} children) <h1>US${38.00 * childCart.length}.00</h1></p>
        <button>Proceder al pago</button>
      </div>
      
    </div>
  
    </>
  )
}
