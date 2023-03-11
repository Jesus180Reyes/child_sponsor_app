import moment from 'moment';
import { FC } from 'react';
import { ChildsResponse, Row } from '../../interfaces/ChildsResponse';
import { useNavigate } from 'react-router-dom';
interface Props {
    childsResponse: ChildsResponse;
    
}
export const CardChildComponent:FC<Props> = ({childsResponse}) => {
  const navigate = useNavigate();
  const onHandlerClick = (child:Row)=> {
    navigate("/childDetails" ,{state:child});
    console.log(child);
  }
  return (
    <>
    <div className="cards">
      {
       childsResponse?.childs.rows.map(({birthday,name,community,currentAge,createdAt,uid},i) => {
        return   <div className="card" key={uid}>
        <h2>Waiting { moment(createdAt).startOf('day').fromNow()}</h2>
        <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
        <h4>Age:<p>{currentAge}</p></h4>
        <h4>BIRTHDAY: <p> {moment(birthday).format("MMM Do")}</p></h4>
        <h4>LOCATION: <p>{community}</p></h4>
        <button  onClick={()=>onHandlerClick(childsResponse.childs.rows[i])} className='btn-chooseMe'>Choose Me</button>
      </div>
       })
      }
    
    
      
      </div>    
    
    </>
  )
}
