import { useEffect, useState } from 'react';
import { useChild } from './hooks/useChild';
import "../child/child.css"
import { CardChildComponent,ChildAgeFilter } from '../../components/';
import { LoadingPage,BannerHeader,Navbar, Footer } from '../../shared/';
export const ChildsPage = () => {
  const [gender, setGender] = useState<string>("either");
  const {limit,setLimit,childsResponse,isLoading,getChilds,getChildsByApi,onViewMoreClick,onRandomSelectedChild} = useChild();
  
  useEffect(() => {
    getChildsByApi();
    
  }, [limit,gender]);
  
  const onGenderChange = (newGender?:string):string | undefined=> {
    if(newGender === gender) return;
    setGender(newGender!);
    getChilds(newGender);
    setLimit(6);
    return newGender;
  }
  if(isLoading) return (<LoadingPage/>);
  return (
    <>
    <div className="childs-container">
    <Navbar/>
    <BannerHeader title='Select a Child to Sponsor' description='Each child pictured urgently needs a sponsor. As you offer encouragement and support in Sponsor App, your love will ignite a lifetime of hope. Sponsor a child today for only $38 per month.'/>
      <div className="filter-box">
        <div className="gender-filter">
          <p>Im looking for a:</p>
          <div className="gender-buttons">
            <button onClick={()=>onGenderChange("femenino")} style={gender === "femenino" ? {"backgroundColor": "orange" } : {}}>GIRL</button>
            <button onClick={()=>onGenderChange("masculino")} style={gender === "masculino" ? {"backgroundColor": "orange" } : {}}>BOY</button>
            <button onClick={()=>onGenderChange('either')} style={gender === "either" ? {"backgroundColor": "orange" } : {}}>Either</button>
          </div>
          </div>
          <ChildAgeFilter/>
      </div>
      <CardChildComponent childsResponse={childsResponse!}/>
      </div>
      <div className="row-buttons-childs">
        <button onClick={onViewMoreClick} className='btn-viewMore'>VIEW MORE CHILDREN</button>
        <button onClick={onRandomSelectedChild} className='btn-randomChild'>SELECT A CHILD FOR ME</button>

      </div>
      <Footer/>
    </>
    
  )
}
