import { Footer, Navbar } from '../../shared';
import { useSelector } from 'react-redux';
import { ChildCartComponent } from '../../components/';
import { NotFoundPage } from '../../shared/NotFoundPage';

export const ChildCart = () => {
  const {childCart} = useSelector((state:any) => state.child);
  document.title = `Cart | ${childCart.length} children on the cart`;
  if(!childCart.length) return (<NotFoundPage/>);
  return (
    <>
    <Navbar/>
    <div className="cart-container animate__animated animate__fadeIn">
      <ChildCartComponent childCart={childCart}/>
    </div>
    <Footer/>
    </>
  )
}
