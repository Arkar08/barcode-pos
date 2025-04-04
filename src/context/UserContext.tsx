import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
    userList:[],
    loading:false,
    error:null
})


const UserProvider = ({children}:ChildrenType)=>{

    const [userList,setUserList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    // const [createUserList , setCreateUserList] = useState({
    //     fullName:'',
    //     email:"",
    //     roleId:"",
    //     password:"",
    //     phNumber:"",
    //     state:"",
    //     township:"",
    //     address:""
    // })


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
            setError(error.message)
        })
    }

    return(
        <UserContext.Provider value={{userList,error,loading}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;