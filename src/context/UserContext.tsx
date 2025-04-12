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
        role:"",
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
    stateEditChange:(_value:string)=>{},
    township:[],
    townshipActive:true,
    townshipChange:(_value:string)=>{},
    active:false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditId:(_id:any)=>{},
    editUser:{
        fullName:'',
        email:"",
        roleId:0,
        password:"",
        phNumber:"",
        state:"",
        township:"",
        address:"",
        companyName:"",
        description:""
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    editUserChange:(_data:any)=>{},
    updateUser:()=>{},
    editTownship:[],
    townshipEditChange:(_value:string)=>{}
})


const UserProvider = ({children}:ChildrenType)=>{

    const [userList,setUserList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [createUserList , setCreateUserList] = useState({
        fullName:'',
        email:"",
        role:"",
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
    const [editId,setEditId] = useState('')
    const [editUser,setEditUser] = useState({
        fullName:'',
        email:"",
        roleId:0,
        password:"",
        phNumber:"",
        state:"",
        township:"",
        address:"",
        companyName:"",
        description:""
    })

    const [editTownship,setEditTownship] = useState([])


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            getUser()
            if(editId !== ''){
                getUserId()
                getTownship()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editId])

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
        if(value === 3){
            setActive(true)
        }else{
            setActive (false)
        }
        setCreateUserList((prev)=>{
            return {
                ...prev,
                role:value
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
        await Axios.post("users",createUserList).then((res)=>{
            if(res.data.status ===201){
                alert(res.data.message)
                window.location.href = '/users'
            }
        }).catch((error)=>{
            console.log(error)
            setError(error.response.data.message)
        })
    }

    const getUserId = async()=>{
        setLoading(true)
        await Axios.get(`users/${editId}`).then((res)=>{
            if(res.data.status === 200){
                setLoading(false)
                setEditUser(res.data.data)
            }
            
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.response.data.message)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const editUserChange = (event:any)=>{
        setEditUser((prev)=>{
            return {
                ...prev,[event.target.name]:event.target.value
            }
        })
    }

    const stateEditChange = async(value:string)=>{
        if(value !== ''){
            const data = {
                stateCode:value
            }
            await Axios.post("find/township",data).then((res)=>{
                if(res.data.status ===200){
                    setTownshipAcite(false)
                    setEditTownship(res.data.data)
                }
            })
            setEditUser((prev)=>{
                return {
                    ...prev,
                    state:value
                }
            })
        }
    }

    const townshipEditChange = (value:string)=>{
        setEditUser((prev)=>{
            return {
                ...prev,
                township:value
            }
        })
    }

    const getTownship = async()=>{
        await Axios.get('find/township1').then((res)=>{
            if(res.data.status ===200){
                setEditTownship(res.data.data)
            }
        }).catch(error=>{
            console.log(error)
            setError(error.response.data.message)
        })
    }


    const updateUser = async()=>{
        await Axios.patch(`users/${editId}`,editUser).then((res)=>{
            if(res.data.status === 200){
                window.location.href = '/users'
                alert(res.data.message)
            }
        }).catch(error =>{
            console.log(error)
            setError(error.response.data.message)
        })
    }

    return(
        <UserContext.Provider value={{userList,error,loading,createUserList,handleUserChange,createUser,handleRoleChange,stateChange,township,townshipActive,townshipChange,active,setEditId,editUser,editUserChange,updateUser,stateEditChange,editTownship,townshipEditChange}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;