import { createContext, useState } from "react";
import { ChildrenType } from "../utils/Type";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
    loginUser:{
        email:"",
        password:""
    }
})

const AuthProvider = ({children}:ChildrenType)=>{

    const [loginUser,setLoginUser] = useState({
        email:'',
        password:''
    })

    return <AuthContext.Provider value={{loginUser}}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;