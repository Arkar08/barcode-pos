/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({
    productList:[],
    loading:false,
    error:null,
    createProduct:{
        productName:"",
        categoryId:"",
        userId:"",
        stockLevel:"",
        price:'',
        description:""
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange:(_data:any)=>{},
    CreateProductList:()=>{},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditProductId:(_id:any) =>{},
    editProduct:{
        productName:"",
        categoryId:"",
        userId:"",
        stockLevel:"",
        price:"",
        description:""
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleEditChange:(_data:any) =>{},
    updateProduct:()=>{}
})


const ProductProvider = ({children}:ChildrenType)=>{

    const [productList,setProductList] = useState<never[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [createProduct,setCreateProduct] = useState({
        productName:"",
        categoryId:"",
        userId:"",
        stockLevel:"",
        price:'',
        description:""
    })
    const [editProductId,setEditProductId] = useState("")
    const [editProduct,setEditProduct] = useState({
        productName:"",
        categoryId:"",
        userId:"",
        stockLevel:"",
        price:"",
        description:""
    })


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            getProduct()
            if(editProductId !== ''){
                getProductId()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editProductId])

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
            setError(error.response.data.message)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event:any)=>{
        setCreateProduct((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    const CreateProductList=async()=>{
        setLoading(true)
        await Axios.post("products",createProduct).then((res)=>{
            setLoading(false)
            if(res.data.status === 201){
                alert(res.data.message)
                window.location.href = '/products'
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error.response.data.message)
            alert(error.response.data.message)
            window.location.href = '/products'
            setError(error.response.data.message)
        })
    }
    
    const getProductId = async()=>{
        setLoading(true)
        await Axios.get(`products/${editProductId}`).then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                setEditProduct(res.data.data[0])
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error.response.data.message)
            alert(error.response.data.message)
            window.location.href = '/products'
            setError(error.response.data.message)
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleEditChange = (event:any)=>{
        setEditProduct((prev)=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }

    const updateProduct = async()=>{
        setLoading(true)
        await Axios.patch(`products/${editProductId}`,editProduct).then((res)=>{
            setLoading(false)
            if(res.data.status === 200){
                alert(res.data.message)
                window.location.href = '/products'
            }
        }).catch((error)=>{
            setLoading(false)
            console.log(error.response.data.message)
            alert(error.response.data.message)
            window.location.href = '/products'
            setError(error.response.data.message)
        })
    }


    return(
        <ProductContext.Provider value={{productList,loading,error,createProduct,handleChange,CreateProductList,setEditProductId,editProduct,handleEditChange,updateProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;