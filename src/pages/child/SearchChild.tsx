import { useEffect, useState } from "react";
import { hostApi } from "../../api/hostApi";
import { ChildsResponse } from "../../interfaces/ChildsResponse";
import { Footer, Navbar } from "../../shared";
import { useLocation } from 'react-router-dom';
import { CardChildComponent } from "../../components";
import Swal from "sweetalert2";
import { NotFoundPage } from "../../shared/NotFoundPage";

export const SearchChild = () => {
    const location = useLocation();
    const [childByCode, setChildByCode] = useState<ChildsResponse>();
  const getChildByCode = async()=> {
    try {
    const resp = await hostApi.get<ChildsResponse>(`/childs/code/${location.state.input}`);
    const {data} = resp;
    setChildByCode(data);
    return data;
    } catch (error:any) {
        return Swal.fire("Something was wrong",error.response.data.msg,"error");
    }
  }

  useEffect(() => {
    getChildByCode();
  
    
  }, [location.state.input]);
  return (
   <>
   <Navbar/>
   <div className="child-searched-container">
    <p className="lbl-result-search">Results of "{location.state.input.toUpperCase()}"</p>
      <CardChildComponent childsResponse={childByCode!}/>
      {/* <Footer/> */}
    </div>
   </>
  )
}
