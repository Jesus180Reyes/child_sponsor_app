import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { hostApi } from "../../../api/hostApi";
import { ChildsResponse } from "../../../interfaces/ChildsResponse";
import { onGetchilds } from "../../../slices/child/childSlice";
import { useNavigate } from 'react-router-dom';

export const useChild = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [rangeValue, setRangeValue] = useState<number>(22);
  const [childsResponse, setChildsResponse] = useState<ChildsResponse>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {childs} = useSelector((state:any) => state.child);

    const getChilds = ( gender?:string):void => {
        
        dispatch(onGetchilds({gender}));
    }
    
    const getChildsByApi= async ():Promise<ChildsResponse>=> {
      setIsLoading(true);
      const resp = await hostApi.get<ChildsResponse>(childs.gender !== "either" ? `/childs?gender=${childs.gender}&limit=${limit}`: `childs/?limit=${limit}`);
      const {data} = resp;
      setChildsResponse(data);
      setIsLoading(false);
      return data;
  
    }
    // INPUTS 
    const onViewMoreClick = ():void => {
      setLimit(limit + 6);
  
    }
    const onRandomSelectedChild = ():void => {
      const randomChild = Math.floor(Math.random() * limit);
      navigate("/childDetails",{state: childsResponse?.childs.rows[randomChild]});
    }
    // INPUT RANGE
    const onInputChange = (e:any):void => {
      setRangeValue(e.target.value);
    }
   
  return {
    // * Propiedades
    childs,
    isLoading,
    childsResponse,
    limit,
    rangeValue,
    // * Metodos
    getChilds,
    getChildsByApi,
    setLimit,
    onViewMoreClick,
    onRandomSelectedChild,
    onInputChange,

  }
}
