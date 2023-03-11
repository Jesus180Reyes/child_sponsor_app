import { useLocation } from "react-router-dom";

export const ChildDetails = () => {
  const location = useLocation();
  return (
   <>
   
   <h1>{JSON.stringify(location.state)}</h1>
   </>
  )
}
