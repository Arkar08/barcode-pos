import { Button, Layout, Table, TableProps } from "antd"
import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import { ProductOrder } from "../../utils/Type";
import { InvoiceContext } from "../../context/InvoiceContext";

const { Title } = Typography;

const textStyle: React.CSSProperties = {
  color: "#7070db",
  textAlign:"center"
};

const tableLayout: React.CSSProperties = {
  maxHeight: "calc(100vh - 200px)",
  height: "calc(100vh - 200px)",
  boxShadow: "1px 1px 2px black",
  marginTop: 20,
  padding: "20px",
  borderRadius: 10,
  maxWidth:"calc(100vw - 1000px)",
  width:"calc(100vw - 1000px)",
  margin:'auto'
};

const btnContainer:React.CSSProperties = {
  position:"absolute",
  left:"65%",
  bottom:"-10%"
}

const ViewContainer:React.CSSProperties = {
  position:"relative"
}

const textDetailContainer:React.CSSProperties = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
}

const productList:React.CSSProperties = {
  marginTop:'10px',
  width:"100%",
  height:'200px',
  overflowY:"auto",
  overflowX:"hidden"
}

const footer:React.CSSProperties = {
  display:"flex",
  justifyContent:"end",
  marginTop:'20px'
}

const total:React.CSSProperties = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  gap:'20px',
  marginTop:'10px'
}


const columns: TableProps<ProductOrder>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Quantity",
    key: "qty",
    dataIndex: "qty",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  }
];


const ViewOrder = () => {

  const navigate = useNavigate()
  const {id} = useParams();

  const context = useContext(OrderContext)
  if(!context){
    throw new Error("orderContext must be used within a orderProvider");
  }

  const context1 = useContext(InvoiceContext)
  if(!context1){
    throw new Error("invoiceContext must be used within a orderProvider");
  }

  const{setEditId,viewOrder} = context
  const{createInvoice} = context1;

  useEffect(()=>{
    setEditId(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const backToInvoice = () =>{
    navigate("/orders")
  }

  return (
    <div style={ViewContainer}>
      <Button type="primary" onClick={backToInvoice} className="print">Back</Button>
      <Layout style={tableLayout}>
        <Layout>
          <Title level={3} style={textStyle}>
            BarCode Pos
          </Title>
          <div style={textDetailContainer}>
            <Title level={5}>
              {viewOrder.orderNo}
            </Title>
            <Title level={5}>Order Date - {viewOrder.orderDate}</Title>
          </div>
          <div style={textDetailContainer}>
            <Title level={5}>
              Customer Name - {viewOrder.fullName}
            </Title>
          </div>
          <div style={productList}>
              <Table<ProductOrder>
              columns={columns}
              dataSource={viewOrder.productLists}
              rowKey={(record) => record.id}  pagination={false} />
          </div>
          <div style={footer}>
            <div>
              <Title level={5} style={total}><span>Total Price-</span> <span>{Number(viewOrder.totalAmount)+ Number(viewOrder.promotion)}</span></Title>
              <Title level={5} style={total}><span>Promotion-</span> <span>{viewOrder.promotion.replace('.00', '')}</span></Title>
              <hr />
              <Title level={5} style={total}><span>Total Amount-</span> <span>{viewOrder.totalAmount}</span></Title>
            </div>
          </div>
        </Layout>
      </Layout>
      <div style={btnContainer}>
        <Button variant="solid" color="green" className="print" onClick={()=>createInvoice(viewOrder.orderId)}>Create Invoice</Button>
      </div>
    </div>
  )
}

export default ViewOrder
