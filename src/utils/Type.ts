

export interface UserType {
    userId:string;
    fullName:string;
    email:string;
    password:string;
    companyName:string;
    state:string;
    township:string;
    roleId:string;
    description:string;
    phNumber:number;
    address:string;
}

export interface ProductType {
    productId:string;
    productName:string;
    stockLevel:string;
    description:string;
    userId:string;
    categoryId:string;
    price:string;
}

export interface CategoryType {
    categoryId:string;
    categoryName:string;
}

export interface OrderType {
    orderId:string;
    fullName:string;
    orderDate:string;
    orderNo:string;
    payment:'Cash' | 'Bank'|'Credit_Card'|'Pay_pal';
    quantity:number;
    promotion:number | null;
    productLists:ProductOrder[]
    totalAmount:number;
}

export interface InvoiceType {
    fullName:string;
    invoiceDate:string;
    invoiceId:string;
    invoiceNo:string;
    orderNo:string;
    payment:'Cash' | 'Bank'|'Credit_Card'|'Pay_pal';
    quantity:string;
    productLists:ProductOrder[]
    promotion:string | null;
    totalAmount:string;
}

export type ProductOrder =  {
    id: string;
    productName:string;
    price:number;
    qty:number;
}


export type ChildrenType = {
    children:React.ReactNode
}

export type CategoryContextType = {
    category:CategoryType[]
    loading:boolean
    error:null | string;
    categoryText:string
    categoryChange:(value:string)=>void
    createCategory:() =>void
    editCategoryText:string | undefined
    setEditCategoryText: React.Dispatch<React.SetStateAction<string | undefined>>;
    editText:string
    editChange:(value:string)=>void
    updateCategory:() =>void
    CancelClick:()=>void
}

export type UserContextType = {
    userList:UserType[]
    loading:boolean
    error:null | string;
    createUserList:UserType;
    handleUserChange:()=>void;
    createUser:()=>void;
    handleRoleChange:()=>void;
    stateChange:()=>void;
    township:stateType[],
    townshipActive:boolean,
    townshipChange:()=>void;
    setEditId:React.Dispatch<React.SetStateAction<string | undefined>>,
    editUserChange:()=>void;
    updateUser:()=>void;
    stateEditChange:()=>void;
    editTownship:()=>void;
    townshipEditChange:()=>void;
}


export type ProductContextType = {
    productList:ProductType[]
    loading:boolean
    error:null | string;
    createProduct:ProductType,
    handleChange:()=>void;
    CreateProductList:()=>void;
    setEditProductId:React.Dispatch<React.SetStateAction<string | undefined>>,
    editProduct:ProductType,
    handleEditChange:()=>void;
    updateProduct:()=>void;
}

export type order = {
    userId:string
    productLists:ProductOrder[]
    promotion:number
    payment:string;
}

export type OrderContextType = {
    orderList:OrderType[]
    loading:boolean
    error:null | string;
    activeQty:boolean
    setActiveQty:React.Dispatch<React.SetStateAction<boolean | undefined>>;
    setOrderData:React.Dispatch<React.SetStateAction <object | undefined>>
    orderData:ProductOrder
    postOrder:order,
    createOrder:()=>void
    setPostOrder:React.Dispatch<React.SetStateAction <object | undefined>>
    setEditId:React.Dispatch<React.SetStateAction <string | undefined>>,
    viewOrder:OrderType
}

export type InvoiceContextType = {
    invoiceList:InvoiceType[]
    loading:boolean
    error:null | string;
    createInvoice:()=>void
    setEditInvoiceId:React.Dispatch<React.SetStateAction <string | undefined>>,
    viewInvoice:InvoiceType
}

type ProductName = {
    value:string;
}
type roleValue = {
    roleName:string;
}

export type stateType = {
    stateName:string
}

export type FindContextType = {
    customers:UserType[],
    supplier:UserType[]
    productName:ProductName[],
    roles:roleValue[],
    state:stateType[]
}