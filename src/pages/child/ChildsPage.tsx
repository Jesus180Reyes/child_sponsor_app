import { useEffect, useState } from 'react';
import { useChild } from './hooks/useChild';
import { hostApi } from '../../api/hostApi';
import "../child/child.css"

import { ChildsResponse } from '../../interfaces/ChildsResponse';
import { CardChildComponent } from '../../components/child/CardChildComponent';
import { LoadingPage } from '../../shared/LoadingPage';
export const ChildsPage = () => {
  const {childs}  = useChild();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [childsResponse, setChildsResponse] = useState<ChildsResponse>();
  const getChildsByApi= async ():Promise<ChildsResponse>=> {
    setIsLoading(true);
    const resp = await hostApi.get<ChildsResponse>(childs.gender ? `/childs?gender=${childs.gender}&limit=${limit}`: `childs/?limit=${limit}`);
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
  
  if(isLoading) return (<LoadingPage/>);
  return (
    <>
    <div className="childs-container ">
      <CardChildComponent childsResponse={childsResponse!}/>
      </div>
      <div className="row-buttons-childs">
        <button onClick={onViewMoreClick} className='btn-viewMore'>VIEW MORE CHILDREN</button>
        <button className='btn-randomChild'>SELECT A CHILD FOR ME</button>

      </div>
    </>
    
  )
}
