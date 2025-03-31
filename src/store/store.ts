import { create } from "zustand";


type NavbarProps = {
    active:boolean,
    menuClick:() => void;
}

const navbarReducer = create<NavbarProps>((set)=>(
    {
        active:false,
        menuClick:(()=> set((state)=>({
            active:!state.active
        }))),
    }
))

export default navbarReducer;