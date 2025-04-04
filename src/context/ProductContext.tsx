import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";


export const ProductContext = createContext({
    productList:[],
    loading:false,
    error:null
})


const ProductProvider = ({children}:ChildrenType)=>{

    const [productList,setProductList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        getProduct()
    },[])

    const getProduct = async()=>{
        setLoading(true)
        await Axios.get("products").then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setProductList(res.data.data)
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error)
            setError(error.message)
        })
    }


    return(
        <ProductContext.Provider value={{productList,loading,error}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;