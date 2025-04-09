import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const FindContext = createContext({
    customers:[],
    supplier:[],
    productName:[],
    roles:[]
})


const FindProvider = ({children}:ChildrenType)=>{

    const [customers,setCustomers] = useState<never[]>([])
    const [supplier,setSupplier] = useState<never[]>([])
    const [productName,setProductName] = useState<never[]>([])
    const [roles,setRoles] = useState([])

    useEffect(()=>{
        getCustomer()
        getSupplier()
        getProductName()
        getRole()
    },[])

    const getCustomer = async()=>{
        await Axios.get("find/customer").then((res)=>{
            if(res.data.status === 200){
                setCustomers(res.data.data)
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    const getSupplier = async()=>{
        await Axios.get("find/supplier").then((res)=>{
            if(res.data.status === 200){
                setSupplier(res.data.data)
            }
        }).catch(error =>{
            console.log(error)
        })
    }

    const getProductName = async()=>{
        await Axios.get("find/products").then((res)=>{
            if(res.data.status === 200){
                setProductName(res.data.data)
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    const getRole = async()=>{
        await Axios.get("find/role").then((res)=>{
            if(res.data.status === 200){
                setRoles(res.data.data)
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <FindContext.Provider value={{customers,supplier,productName,roles}}>
            {children}
        </FindContext.Provider>
    )
}

export default FindProvider;