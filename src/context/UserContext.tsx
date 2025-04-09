/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
    userList:[],
    loading:false,
    error:null,
    createUserList:{
        fullName:'',
        email:"",
        roleId:"",
        password:"",
        phNumber:"",
        state:"",
        township:"",
        address:"",
        companyName:"",
        description:""
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleUserChange:(_data:any)=>{},
    createUser:()=>{},
    handleRoleChange:(_value:string)=>{},
    stateChange:(_value:string)=>{},
    township:[],
    townshipActive:true,
    townshipChange:(_value:string)=>{},
    active:false
})


const UserProvider = ({children}:ChildrenType)=>{

    const [userList,setUserList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [createUserList , setCreateUserList] = useState({
        fullName:'',
        email:"",
        roleId:"",
        password:"",
        phNumber:"",
        state:"",
        township:"",
        address:"",
        companyName:"",
        description:""
    })
    const [township,setTownship] = useState([])
    const [townshipActive,setTownshipAcite] = useState(true)
    const [active,setActive] = useState(false)


    useEffect(()=>{
        getUser()
    },[])

    const getUser = async()=>{
        setLoading(true)
        await Axios.get("users").then((data)=>{
            if(data.data.status ===200){
                setUserList(data.data.data)
                setLoading(false)
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.response.data.message)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUserChange = (event:any)=>{
        setCreateUserList((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRoleChange = (value:any)=>{
        console.log(value)
        if(value === 3){
            setActive(true)
        }else{
            setActive (false)
        }
        setCreateUserList((prev)=>{
            return {
                ...prev,
                roleId:value
            }
        })
    }

    const stateChange = async(value:string)=>{
        if(value !== ''){
            const data = {
                stateCode:value
            }
            await Axios.post("find/township",data).then((res)=>{
                if(res.data.status ===200){
                    setTownshipAcite(false)
                    setTownship(res.data.data)
                }
            })
            setCreateUserList((prev)=>{
                return {
                    ...prev,
                    state:value
                }
            })
        }
    }

    const townshipChange = (value:string)=>{
        setCreateUserList((prev)=>{
            return {
                ...prev,
                township:value
            }
        })
    }

    const createUser = async()=>{
        console.log(createUserList)
    }

    return(
        <UserContext.Provider value={{userList,error,loading,createUserList,handleUserChange,createUser,handleRoleChange,stateChange,township,townshipActive,townshipChange,active}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;