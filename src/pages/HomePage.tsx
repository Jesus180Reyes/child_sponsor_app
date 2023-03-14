import { useState } from "react"
import 'animate.css';
import { useChild } from './child/hooks/useChild';
import { useNavigate } from "react-router-dom";
import { Navbar } from '../shared/Navbar';
export const HomePage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState<string>("either");
  const {getChilds,rangeValue,onInputChange} = useChild();
  const onHandlerSubmit = ():void => {
    getChilds(gender);
    navigate("/childs");
  }
  const onGenderChange = (newGender?:string):string | undefined => {
    if(newGender === gender) return;

    setGender(newGender!);
    return newGender;
  }
 
  return (
   <>
    <Navbar/>
   <div className="banner animate__animated animate__fadeIn" >
    <div className="card-banner-filter">
      <h1>Sponsor a Child in Poverty</h1>
      <p>I'm interested in sponsoring a:</p>
      <div className="genders-fr">
        <div className="custom-label" onClick={()=>onGenderChange("masculino")} style={gender === "masculino" ? {"backgroundColor": "orange" } : {}}>
          <h4>Boy</h4>
        </div>
        <div onClick={()=> onGenderChange("femenino")} className="custom-label" style={gender === "femenino" ? {"backgroundColor": "orange" } : {}}>
          <h4>Girl</h4>
        </div>
        <div onClick={()=> onGenderChange("either")}  className="custom-label" style={gender === "either" ? {"backgroundColor": "orange" } : {}}>
          <h4>Either</h4>
        </div>
      </div>
      <p>Between the ages of:</p>
      <p >1-{rangeValue}</p>
      <input onChange={onInputChange} value={rangeValue} type="range" min={1} max={22}   className="range-age-filter" />
    <button onClick={onHandlerSubmit} className="btn-find">FIND YOUR MATCH</button>
    </div>
   </div>
   </>
  )
}
