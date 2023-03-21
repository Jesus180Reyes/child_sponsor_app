import Svg from "../assets/cart-empty.svg";
import { Navbar } from "./Navbar";
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}
export const NotFoundPage:FC<Props> = ({title,description}) => {
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
    <h1>{title}</h1>
    <h1>{description}</h1>
    <button onClick={onSubmit}>Add A Child now</button>
      </div>

    </div>
    </>
  )
}
