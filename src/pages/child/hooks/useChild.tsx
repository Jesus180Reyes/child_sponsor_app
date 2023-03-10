import { useDispatch, useSelector } from "react-redux"
import { hostApi } from "../../../api/hostApi";
import { onGetchilds } from "../../../slices/child/childSlice";

export const useChild = () => {
    const dispatch = useDispatch();
    const {childs} = useSelector((state:any) => state.child);

    const getChilds = async( gender?:string) => {
        
        dispatch(onGetchilds({gender}));
    }
  return {
    // * Propiedades
    childs,
    // * Metodos
    getChilds,
  }
}
