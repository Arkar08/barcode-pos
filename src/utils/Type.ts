

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
    qty:number;
    products:ProductOrder[]
    customerName:string;
    totalAmount:number;
    promotion:number | null;
    payment:'Cash' | 'Bank';
    orderDate:string;
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
    unitPrice:number;
}

export type ChildrenType = {
    children:React.ReactNode
}

export type CategoryContextType = {
    category:CategoryType[]
    loading:boolean
    error:null
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
    error:null
}


export type ProductContextType = {
    productList:ProductType[]
    loading:boolean
    error:null
}

export type OrderContextType = {
    orderList:OrderType[]
    loading:boolean
    error:null
}

export type InvoiceContextType = {
    invoiceList:InvoiceType[]
    loading:boolean
    error:null
}