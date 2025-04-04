

export interface UserType {
    userId:string;
    name:string;
    email:string;
    companyName:string;
    phNumber:number;
    state:string;
    township:string;
    role:string;
    description:string;
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