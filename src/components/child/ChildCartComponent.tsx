import moment from "moment"
import { Row } from "../../interfaces/ChildsResponse"
import { FC } from 'react';
interface Props {
    childCart:Row[],
}
export const ChildCartComponent:FC<Props> = ({childCart}) => {
  return (
    <>
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
    </>
  )
}
