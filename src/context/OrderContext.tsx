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
    postOrder:{
        userId:"",
        productLists:[],
        promotion:0,
        payment:''
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    setOrderData:(_data: any)=>{},
    createOrder:()=>{},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    setPostOrder:(_data:any) =>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    setEditId:(_data:any)=>{},
    viewOrder:{
        fullName:"",
        orderDate:"",
        orderNo:"",
        orderId:"",
        payment:"",
        productLists:[],
        promotion:"",
        quantity:"",
        totalAmount:""
    }
})


const OrderProvider = ({children}:ChildrenType)=>{

    const [orderList,setOrderList] = useState([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [activeQty,setActiveQty] = useState<boolean>(false)
    const [editId,setEditId] = useState<string>('')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [orderData,setOrderData] = useState<any>({
        qty:0,
        productName:'',
        price:0,
        id:""
    })
    const [postOrder,setPostOrder] = useState({
        userId:'',
        productLists:[],
        promotion:0,
        payment:''
    })
    const [viewOrder , setViewOrder] = useState({
        fullName:"",
        orderDate:"",
        orderNo:"",
        orderId:"",
        payment:"",
        productLists:[],
        promotion:"",
        quantity:"",
        totalAmount:""
    })


      useEffect(()=>{
        getOrder()
        if(editId !== ''){
            editOrder()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[editId])

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
            setError(error.response.data.message)
        })
    }

    const editOrder = async()=>{
        setLoading(true)
        await Axios.get(`orders/${editId}`).then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setViewOrder(res.data.data[0])
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.response.data.message)
        })
    }

    const createOrder = async()=>{
        const convertJSON = JSON.stringify(postOrder.productLists)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setPostOrder((prev:any)=>{
            return{
                ...prev,
                productLists:convertJSON
            }
        })
        setLoading(true)
        await Axios.post("orders",postOrder).then((res)=>{
            if(res.data.status === 201){
                alert(res.data.message)
                window.location.href = '/orders'
                setPostOrder({
                    userId:'',
                    productLists:[],
                    promotion:0,
                    payment:''
                })
            }
            setLoading(false)
        }).catch((error)=>{
            setLoading(false)
            alert(error.response.data.message)
            setError(error.response.data.message)
        })
    }

    return(
        <OrderContext.Provider value={{orderList,loading,error,setActiveQty,activeQty,setOrderData,orderData,createOrder,postOrder,setPostOrder,setEditId,viewOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;