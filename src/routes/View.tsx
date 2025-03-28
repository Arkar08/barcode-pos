import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {data}  from "./Data";


const router = createBrowserRouter(data)

const View = ()=>{
    return <RouterProvider router={router}/>
}

export default View;