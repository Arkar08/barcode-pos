import { create } from "zustand";

type CountProps = {
    count:number
    addCount:() => void;
}


const userReducer = create<CountProps>((set)=>(
    {
        count:0,
        addCount:(()=> set((state)=>({
            count:state.count + 1
        })))
    }
))

export default userReducer;