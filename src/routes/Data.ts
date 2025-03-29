
import Login from "../pages/auth/Login";
import Layouts from "../layout/Layouts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";
import Category from "../pages/Category/Category";
import Logout from "../pages/auth/Logout";
import NotFound from "../pages/NotFound/NotFound";
import Supplier from "../pages/Supplier/Supplier";
import Orders from "../pages/Order/Orders";
import SaleInvoice from "../pages/SaleInvoice/SaleInvoice";
import UserListing from "../pages/User/UserListing";
import CreateUser from "../pages/User/CreateUser";
import CreateSupplier from "../pages/Supplier/CreateSupplier";
import CreateSaleInvoice from "../pages/SaleInvoice/CreateSaleInvoice";
import CreateProduct from "../pages/Product/CreateProduct";
import CreateOrder from "../pages/Order/CreateOrder";
import CreateCategory from "../pages/Category/CreateCategory";



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
                path:'users/create',
                text:"Create User",
                Component:CreateUser
            },
            {
                path:"products",
                text:"Products",
                Component:Product
            },
            {
                path:"products/create",
                text:"Create Products",
                Component:CreateProduct
            },
            {
                path:"category",
                text:"Category",
                Component:Category
            },
            {
                path:"category/create",
                text:"Create Category",
                Component:CreateCategory
            },
            {
                path:"supplier",
                text:"Supplier",
                Component:Supplier
            },
            {
                path:"supplier/create",
                text:"Create Supplier",
                Component:CreateSupplier
            },
            {
                path:"orders",
                text:"Orders",
                Component:Orders
            },
            {
                path:"orders/create",
                text:"Create Order",
                Component:CreateOrder
            },
            {
                path:"invoice",
                text:"Invoice",
                Component:SaleInvoice
            },
            {
                path:"invoice/create",
                text:"Create Invoice",
                Component:CreateSaleInvoice
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