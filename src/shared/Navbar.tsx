import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useChild } from '../pages/child/hooks/useChild';

export const Navbar = () => {
  const [inputHandlerValue, setinputHandlerValue] = useState<string>("");
  const {childCart}  =  useChild();
  const navigate = useNavigate();

  const onSubmit = (e:any) => {
    e.preventDefault();
    if(inputHandlerValue.length <1) return;
    navigate("/search",{state: {input:inputHandlerValue}});
  }

  const onInputHandlerChange = (e:any)=> {
    setinputHandlerValue(e.target.value);
  }
  return (
    <>
        <div className="navbar">
        <div className="logo">
          <h1 onClick={(e:any)=> { navigate("/")}}><a >LOGO</a></h1>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="row-items">
          <h3><a  onClick={(e:any)=> { navigate("/")}}>Home</a></h3>
          <h3><a>Ways to donate</a></h3>
          <h3><a>About Us</a></h3>
          <h3><a>Blog</a></h3>
          <h3><a>Connect with us</a></h3>
          <h3 onClick={()=> navigate("/childs")}><a>Sponsor a Child</a></h3>
        </div>
        <div className="search_user_items">
          <form onSubmit={onSubmit}>
          <input value={inputHandlerValue} onChange={onInputHandlerChange} type="text" placeholder='Search by code:'/>
          </form>
          <i className="fa-solid fa-magnifying-glass" onClick={onSubmit}></i>
          <div className="cart-notification-container" onClick={()=> navigate("/cart")}>
          <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>
          {
            childCart.length
            ?  <div className="circle-notification-cart animate__animated animate__bounce animate__delay-5s">
            <p>{childCart.length}</p>
          </div>
          : undefined
          }
          </div>
          <i className="fa-solid fa-user" onClick={()=> navigate("/auth/profile")}></i>


        </div>
        </div>
    </>
  )
}
