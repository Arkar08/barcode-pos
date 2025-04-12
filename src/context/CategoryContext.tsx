import { createContext, useEffect, useState } from "react";
import { CategoryContextType, CategoryType, ChildrenType } from "../utils/Type";
import Axios from "../api/ApiConfig";



// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext<CategoryContextType | undefined>({
    category:[],
    loading:false,
    error:null,
    categoryText:'',
    categoryChange:()=>{},
    createCategory:()=>{},
    editCategoryText:'',
    setEditCategoryText: () => {},
    editText:'',
    editChange:() =>{},
    updateCategory:() =>{},
    CancelClick:() =>{}
})


const CategoryProvider = ({children}:ChildrenType)=>{

    const [category,setCategory] = useState<CategoryType[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState(null)
    const [categoryText,setCategoryText] = useState<string>('')
    const [editCategoryText,setEditCategoryText] = useState<string | undefined>('')
    const [editText ,setEditText] = useState<string>('')


    useEffect(()=>{
        const token = localStorage.getItem('token')
       if(token){
        getCategory()
        if(editCategoryText !== ''){
            EditCategory()
        }
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editCategoryText])

    const getCategory = async()=>{
            setLoading(true)
           await Axios.get("category").then((data)=>{
                if(data.data.status === 200){
                    setCategory(data.data.data)
                    setLoading(false)
                }else{
                    console.log(data)
                    setError(error)
                }
            }).catch((error)=>{
                setLoading(false)
                setError(error.response.data.message)
                console.log(error)
            })
    }

    const categoryChange = (value:string)=>{
        setCategoryText(value)
    }

    const createCategory = async()=>{
        const data = {
            categoryName:categoryText
        }
        setLoading(true)
        try {
           const response = await Axios.post("category",data)
            if(response.data.status === 201){
                setLoading(false)
                alert(response.data.message)
                getCategory()
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const EditCategory = async()=>{
        try {
          const response = await Axios.get(`category/${editCategoryText}`)
          if(response.data.status === 200){
            setEditText(response.data.data[0].categoryName)
          }
        } catch (error) {
          console.log(error)
        }
    }

    const editChange =  (value:string)=>{
        setEditText(value)
    }

    const updateCategory = async()=>{
        const data = {
            categoryName:editText
        }
        setLoading(true)
        try {
           const response = await Axios.patch(`category/${editCategoryText}`,data)
            if(response.data.status === 200){
                setEditCategoryText('')
                setLoading(false)
                alert(response.data.message)
                getCategory()
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const CancelClick = () =>{
        setCategoryText('')
      }

    return(
        <CategoryContext.Provider value={{category,loading,error,categoryText,categoryChange,createCategory,setEditCategoryText,editCategoryText,editText,editChange,updateCategory,CancelClick}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;