export interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    animal:string;
}
  
export interface DataType1 {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export interface UserType {
    userId:string;
    name:string;
    email:string;
    phNumber:number;
    state:string;
    township:string;
}

export interface SupplierType {
    supplierId:string;
    supplierName:string;
    companyName:string;
    phNumber:number;
    state:string;
    township:string;
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
    customerName:string;
    totalAmount:number;
    promotion:number | null;
    payment:'Cash' | 'Bank';
    deliveryDate:string | null;
    orderDate:string;
}

export interface InvoiceType {
    invoiceId:string;
    qty:number;
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