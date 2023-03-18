import Svg from "../assets/cart-empty.svg";
import { Navbar } from "./Navbar";
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/childs")
  }
  return (
    <>
    <Navbar/>
    <div className="cart-empty-container">
      <div className="cart-empty-box">

    <img src={Svg} alt="" />
    <h1>Cart is empty</h1>
    <h1>Add a child to the cart</h1>
    <button onClick={onSubmit}>Add A Child now</button>
      </div>

    </div>
    </>
  )
}
