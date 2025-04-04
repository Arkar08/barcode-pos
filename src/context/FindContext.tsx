import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const FindContext = createContext({
    customers:[],
    supplier:[]
})


const FindProvider = ({children}:ChildrenType)=>{

    const [customers,setCustomers] = useState<never[]>([])
    const [supplier,setSupplier] = useState<never[]>([])

    useEffect(()=>{
        getCustomer()
        getSupplier()
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

    return(
        <FindContext.Provider value={{customers,supplier}}>
            {children}
        </FindContext.Provider>
    )
}

export default FindProvider;