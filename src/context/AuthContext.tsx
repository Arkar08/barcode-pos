/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import { ChildrenType, FieldType, FieldType1 } from "../utils/Type";
import { FormProps } from "antd";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinish:(_values:any)=>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinishFailed:(_errorInfo:any)=>{},
    role:'',
    logout:()=>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinishFailed1:(_errorInfo:any)=>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onFinish1:(_values:any)=>{},
    activeButton:false,
    handleActive:()=>{}
})


  
const AuthProvider = ({children}:ChildrenType)=>{
    const [role,setRole] = useState('')
    
    const [activeButton,setActiveButton] = useState<boolean>(false)

    const handleActive = ()=>{
            setActiveButton(!activeButton)
    }


    const onFinish: FormProps<FieldType>["onFinish"] = async(values) => {
        const data = {
            email:values.username,
            password:values.password
        }
        await Axios.post("auth/login",data).then((res)=>{
            if(res.data.status === 200){
                if(res.data.roleName === 'Admin' || res.data.roleName === 'Supplier'){
                    window.location.href = '/dashboard'
                    localStorage.setItem("token",res.data.token)
                    setRole(res.data.roleName)
                }else{
                    window.location.href = '/auth/login'
                }
            }
        }).catch((error)=>{
            alert(error.response.data.message)
        })
        
        
      };

      const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        alert(errorInfo.errorFields[0].errors[0]);
      };

      const onFinish1: FormProps<FieldType1>["onFinish"] = async(values) => {
        const data = {
            email:values.email,
            password:values.password,
            fullName:values.username,
            roleId:activeButton ? 3 : 1
        }
        await Axios.post("auth/signup",data).then((res)=>{
            if(res.data.status === 200){
                if(res.data.role === 'Admin' || res.data.role === 'Supplier'){
                    window.location.href = '/dashboard'
                    localStorage.setItem("token",res.data.token)
                    setRole(res.data.role)
                }else{
                    window.location.href = '/auth/login'
                }
            }
        }).catch((error)=>{
            alert(error.response.data.message)
        })
        console.log("Success:", values);
      };
      
      const onFinishFailed1: FormProps<FieldType1>["onFinishFailed"] = (errorInfo) => {
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

      const postValue = {onFinish,onFinishFailed,role,logout,onFinishFailed1,onFinish1,handleActive,activeButton}

    return <AuthContext.Provider value={postValue}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;