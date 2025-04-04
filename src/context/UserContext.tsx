import { createContext } from "react";
import { ChildrenType } from "../utils/Type";




// type UserType = {

// }


export const UserContext = createContext()


const UserProvider = ({children}:ChildrenType)=>{
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider;