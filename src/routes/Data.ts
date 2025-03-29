
import Login from "../pages/auth/Login";
import Layouts from "../layout/Layouts";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Logout from "../pages/auth/Logout";
import NotFound from "../pages/NotFound";
import Supplier from "../pages/Supplier";
import Orders from "../pages/Orders";
import SaleInvoice from "../pages/SaleInvoice";
import UserListing from "../pages/UserListing";



export const data = [
   {
        path:"auth/login",
        text:"Login",
        Component:Login
   },
   {
        path:"/",
        text:"Layouts",
        Component:Layouts,
        children:[
            {
                path:"dashboard",
                text:"Dashboard",
                Component:Dashboard
            },
            {
                path:"users",
                text:"Users",
                Component:UserListing
            },
            {
                path:"products",
                text:"Products",
                Component:Product
            },
            {
                path:"category",
                text:"Category",
                Component:Category
            },
            {
                path:"supplier",
                text:"Supplier",
                Component:Supplier
            },
            {
                path:"orders",
                text:"Orders",
                Component:Orders
            },
            {
                path:"invoice",
                text:"Purchase",
                Component:SaleInvoice
            },
            {
                path:"logout",
                text:"Logout",
                Component:Logout
            }
        ]
   },
   {
        path:"*",
        text:'Not Found',
        Component:NotFound
   }
]