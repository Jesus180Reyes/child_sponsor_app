import { useEffect, useState } from 'react';
import '../child/index.css'
import { useChild } from './hooks/useChild';
import { hostApi } from '../../api/hostApi';
import { useNavigate } from 'react-router-dom';
import { ChildsResponse } from '../../interfaces/ChildsResponse';
export const ChildsPage = () => {
  const navigate = useNavigate();
  const {childs,getChilds}  = useChild();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [childsResponse, setChildsResponse] = useState<ChildsResponse>();
  const getChildsByApi =async ()=> {
    setIsLoading(true);
    const resp = await hostApi.get(childs.gender ? `/childs?gender=${childs.gender}&limit=5`: `childs/?limit=5`);
    const data = resp.data;
    setChildsResponse(data);
    setIsLoading(false);

  }
  useEffect(() => {
    getChildsByApi();
    
  }, []);
  
  if(isLoading) return <h1>Cargando...</h1>
  return (
    <>
    <h1>{JSON.stringify(childsResponse?.childs.rows)}</h1>
    </>
    
  )
}
