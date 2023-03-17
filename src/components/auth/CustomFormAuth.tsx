import { FC } from 'react';
import { useAuth } from '../../pages/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
interface Props {
    title: string,
    label: string,
    route: string,
    inputs: any[],
    onSubmit: any,
}
export const CustomFormAuth:FC<Props> = ({title,label,inputs,onSubmit,route}) => {
  const {isLoading} = useAuth();
  const navigate = useNavigate();
  return (
    <>
    <div className="auth-box">
        <div className="form-container">
        <form  onSubmit={onSubmit}>
        <h1>{title}</h1>
        {
            inputs.map((input,i)=> {
                return <input disabled={isLoading} key={i} type={input.type} placeholder={input.title} value={input.value} onChange={(e:any)=> input.onChange(e.target.value)} />
                // <br />
            })
        }
        <br />
        <button style={isLoading ? {backgroundColor: "#F2F3F4",color:"#D6DBDF"}: {}} aria-disabled disabled={isLoading} onClick={()=> onSubmit}>{isLoading ? "Please Wait":  title}</button>
        </form>
        <span onClick={()=> navigate(route)}>{label}</span>
        </div>
      </div>
    </>
  )
}
