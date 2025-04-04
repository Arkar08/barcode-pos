import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext({
    orderList:[],
    loading:false,
    error:null
})


const OrderProvider = ({children}:ChildrenType)=>{

    const [orderList,setOrderList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        getOrder()
    },[])

    const getOrder = async()=>{
        setLoading(true)
        await Axios.get("orders").then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setOrderList(res.data.data)
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.message)
        })
    }

    return(
        <OrderContext.Provider value={{orderList,loading,error}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;