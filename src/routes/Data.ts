
import Login from "../pages/auth/Login";
import Layouts from "../layout/Layouts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Product from "../pages/Product/Product";
import Category from "../pages/Category/Category";
import Logout from "../pages/auth/Logout";
import NotFound from "../pages/NotFound/NotFound";
import Orders from "../pages/Order/Orders";
import SaleInvoice from "../pages/SaleInvoice/SaleInvoice";
import UserListing from "../pages/User/UserListing";
import CreateUser from "../pages/User/CreateUser";
import CreateSaleInvoice from "../pages/SaleInvoice/CreateSaleInvoice";
import CreateProduct from "../pages/Product/CreateProduct";
import CreateOrder from "../pages/Order/CreateOrder";
import CreateCategory from "../pages/Category/CreateCategory";
import UpdateUser from "../pages/User/UpdateUser";
import ViewInvoice from "../pages/SaleInvoice/ViewInvoice";
import UpdateProduct from "../pages/Product/UpdateProduct";
import ViewOrder from "../pages/Order/ViewOrder";
import UpdateCategory from "../pages/Category/UpdateCategory";
import Signup from "../pages/auth/Signup";
import ProtectedRoute from "../providers/ProtectedRoute";


export const data = [
   {
        path:"auth/login",
        text:"Login",
        Component:Login
   },
   {    
        path:"auth/signup",
        text:"Signup",
        Component:Signup
   },
   {
        path:"/",
        text:"Layouts",
        Component:ProtectedRoute,
        children:[
            {
                index:true,
                Component:Layouts,
            },
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
                path:"users/:id",
                text:"Update User",
                Component:UpdateUser
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
                path:"products/:id",
                text:"Update Products",
                Component:UpdateProduct
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
                path:"category/:id",
                text:"Update Category",
                Component:UpdateCategory
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
                path:"orders/:id",
                text:"View Order",
                Component:ViewOrder
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
                path:"invoice/:id",
                text:'View Invoice',
                Component:ViewInvoice
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