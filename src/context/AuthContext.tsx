/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { ChildrenType, FieldType } from "../utils/Type";
import { FormProps } from "antd";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinish:(_values:any)=>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinishFailed:(_errorInfo:any)=>{},
    role:'',
    logout:()=>{}
})


  
const AuthProvider = ({children}:ChildrenType)=>{
    const [role,setRole] = useState('')

    const onFinish: FormProps<FieldType>["onFinish"] = async(values) => {
        const data = {
            email:values.username,
            password:values.password
        }
        await Axios.post("auth/login",data).then((res)=>{
            if(res.data.status === 200){
                localStorage.setItem("token",res.data.token)
                setRole(res.data.roleName)
                window.location.href = '/dashboard'
            }
        }).catch((error)=>{
            alert(error.response.data.message)
        })
        
        
      };

      const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        alert(errorInfo.errorFields[0].errors[0]);
      };
      
      const logout = async()=>{
        await Axios.post("auth/logout").then((res)=>{
            if(res.status === 200){
                alert(res.data)
                localStorage.removeItem("token")
                window.location.href = 'auth/login'
            }
        })
      }

    return <AuthContext.Provider value={{onFinish,onFinishFailed,role,logout}}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;