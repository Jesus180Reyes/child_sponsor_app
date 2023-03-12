import { useEffect, useState } from 'react';
import { useChild } from './hooks/useChild';
import { hostApi } from '../../api/hostApi';
import "../child/child.css"
import { ChildsResponse } from '../../interfaces/ChildsResponse';
import { CardChildComponent } from '../../components/';
import { LoadingPage } from '../../shared/LoadingPage';
import { useNavigate } from 'react-router-dom';


export const ChildsPage = () => {
  const {childs}  = useChild();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [childsResponse, setChildsResponse] = useState<ChildsResponse>();
  const getChildsByApi= async ():Promise<ChildsResponse>=> {
    setIsLoading(true);
    const resp = await hostApi.get<ChildsResponse>(childs.gender !== "either" ? `/childs?gender=${childs.gender}&limit=${limit}`: `childs/?limit=${limit}`);
    const {data} = resp;
    setChildsResponse(data);
    setIsLoading(false);
    return data;

  }
  useEffect(() => {
    getChildsByApi();
    
  }, [limit]);
  const onViewMoreClick = ()=> {
    setLimit(limit + 6);

  }
  const onRandomSelectedChild = ()=> {
    const randomChild = Math.floor(Math.random() * limit);
    navigate("/childDetails",{state: childsResponse?.childs.rows[randomChild]});
  }
  
  if(isLoading) return (<LoadingPage/>);
  return (
    <>
    <div className="childs-container ">
      <CardChildComponent childsResponse={childsResponse!}/>
      </div>
      <div className="row-buttons-childs">
        <button onClick={onViewMoreClick} className='btn-viewMore'>VIEW MORE CHILDREN</button>
        <button onClick={onRandomSelectedChild} className='btn-randomChild'>SELECT A CHILD FOR ME</button>

      </div>
    </>
    
  )
}
