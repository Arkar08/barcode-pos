

export interface UserType {
    userId:string;
    fullName:string;
    email:string;
    companyName:string;
    state:string;
    township:string;
    roleName:string;
    description:string;
    phNumber:number;
    address:string;
}

export interface ProductType {
    productId:string;
    productName:string;
    stockLevel:string;
    description:string;
    suppliedBy:string;
    category:string;
    unitPrice:number;
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
    payment:'Cash' | 'Bank';
    quantity:number;
    promotion:number | null;
    products:ProductOrder[]
    totalAmount:number;
}

export interface InvoiceType {
    invoiceId:string;
    qty:number;
    products:ProductOrder[]
    customerName:string;
    promotion:number | null;
    payment:'Cash' | 'Bank';
    totalAmount:number;
    invoiceDate:string;
}

export type ProductOrder =  {
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
}


export type ProductContextType = {
    productList:ProductType[]
    loading:boolean
    error:null | string;
}

export type OrderContextType = {
    orderList:OrderType[]
    loading:boolean
    error:null | string;
    activeQty:boolean
    setActiveQty:React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export type InvoiceContextType = {
    invoiceList:InvoiceType[]
    loading:boolean
    error:null | string;
}

type ProductName = {
    value:string;
}

export type FindContextType = {
    customers:UserType[],
    supplier:UserType[]
    productName:ProductName[]
}