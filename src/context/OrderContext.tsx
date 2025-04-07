import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";


// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext({
    orderList:[],
    loading:false,
    error:null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setActiveQty:(_value:boolean)=>{},
    activeQty:false,
    orderData:{
        productName:'',
        qty:0,
        id:'',
        price:0
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    setOrderData:(_data: any)=>{}
})


const OrderProvider = ({children}:ChildrenType)=>{

    const [orderList,setOrderList] = useState([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [activeQty,setActiveQty] = useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [orderData,setOrderData] = useState<any>({
        qty:0,
        productName:'',
        price:0,
        id:""
    })


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
        <OrderContext.Provider value={{orderList,loading,error,setActiveQty,activeQty,setOrderData,orderData}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;