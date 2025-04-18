import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const InvoiceContext = createContext({
    invoiceList:[],
    loading:false,
    error:null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createInvoice:(_id:string)=>{},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    setEditInvoiceId:(_data:any)=>{},
    viewInvoice:{
        fullName:"",
        invoiceDate:"",
        invoiceNo:"",
        invoiceId:"",
        payment:"",
        productLists:[],
        promotion:"",
        quantity:"",
        totalAmount:""
    }
})


const InvoiceProvider = ({children}:ChildrenType)=>{

    const [invoiceList,setInvoiceList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [editInvoiceId,setEditInvoiceId] = useState<string>('')
    const [viewInvoice , setViewInvoice] = useState({
        fullName:"",
        invoiceDate:"",
        invoiceNo:"",
        invoiceId:"",
        payment:"",
        productLists:[],
        promotion:"",
        quantity:"",
        totalAmount:""
    })


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            getInvoice()
            if(editInvoiceId !== ''){
                editInvoice()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editInvoiceId])

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
            setError(error.response.data.message)
        })
    }

    const createInvoice = async(id:string)=>{
        const data = {
            orderId:id
        }
        setLoading(true)
        await Axios.post("invoice",data).then((res)=>{
            setLoading(false)
            if(res.data.status === 201){
                alert(res.data.message)
                window.location.href = '/invoice'
            }
        }).catch(error =>{
            setLoading(false)
            alert(error.response.data.message)
            window.location.href = '/orders'
            setError(error.response.data.message)
        })
    }

    const editInvoice = async()=>{
        setLoading(true)
        await Axios.get(`invoice/${editInvoiceId}`).then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setViewInvoice(res.data.data[0])
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            alert(error.response.data.message)
            window.location.href = '/invoice'
            setError(error.response.data.message)
        })
    }

    const postValue = {invoiceList,loading,error,createInvoice,setEditInvoiceId,viewInvoice}

    return(
        <InvoiceContext.Provider value={postValue}>
            {children}
        </InvoiceContext.Provider>
    )
}

export default InvoiceProvider;