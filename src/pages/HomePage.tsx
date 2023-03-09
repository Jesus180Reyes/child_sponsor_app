import { useState } from "react"

export const HomePage = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
   <>
   <div className="banner">
    <div className="card-banner-filter">
      <h1>Sponsor a Child in Poverty</h1>
      <p>I'm interested in sponsoring a:</p>
      <div className="genders-fr">
        <div className="custom-label">
          <h4>Boy</h4>
        </div>
        <div className="custom-label">
          <h4>Girl</h4>
        </div>
        <div className="custom-label" style={isSelected ? {"backgroundColor": "orange" } : {}}>
          <h4>Either</h4>
        </div>
      </div>
      <p>Between the ages of:</p>
      <input type="range" min={1} max={22}   className="range-age-filter" />
    <button className="btn-find">FIND YOUR MATCH</button>
    </div>
   </div>
   </>
  )
}
