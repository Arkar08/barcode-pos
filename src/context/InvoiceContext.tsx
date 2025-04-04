import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";

export const InvoiceContext = createContext({
    invoiceList:[],
    loading:false,
    error:null
})


const InvoiceProvider = ({children}:ChildrenType)=>{

    const [invoiceList,setInvoiceList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        getInvoice()
    },[])

    const getInvoice = async()=>{
        setLoading(true)
        await Axios.get("invoice").then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setInvoiceList(res.data.data)
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.message)
        })
    }

    return(
        <InvoiceContext.Provider value={{invoiceList,loading,error}}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceProvider;