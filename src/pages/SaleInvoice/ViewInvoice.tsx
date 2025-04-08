import { Button, Layout, Table, TableProps } from "antd"
import { Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ProductOrder } from "../../utils/Type";
import { useContext, useEffect } from "react";
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

const productList:React.CSSProperties = {
  marginTop:'10px',
  width:"100%",
  height:'200px',
  overflowY:"auto",
  overflowX:"hidden"
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

const ViewInvoice = () => {

  const navigate = useNavigate()

  const {id} = useParams();

  const context1 = useContext(InvoiceContext)
  if(!context1){
    throw new Error("orderContext must be used within a orderProvider");
  }

  const{setEditInvoiceId,viewInvoice} = context1

  useEffect(()=>{
    setEditInvoiceId(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const backToInvoice = () =>{
    navigate("/invoice")
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
            {viewInvoice.invoiceNo}
          </Title>
          <Title level={5}>Invoice Date - {viewInvoice.invoiceDate}</Title>
        </div>
        <div style={textDetailContainer}>
          <Title level={5}>
            Customer Name - {viewInvoice.fullName}
          </Title>
        </div>
          <div style={productList}>
              <Table<ProductOrder>
              columns={columns}
              dataSource={viewInvoice.productLists}
              rowKey={(record) => record.id}  pagination={false} />
          </div>
          <div style={footer}>
            <div>
              <Title level={5} style={total}><span>Total Price-</span> <span>{Number(viewInvoice.totalAmount)+ Number(viewInvoice.promotion)}</span></Title>
              <Title level={5} style={total}><span>Promotion-</span> <span>{viewInvoice.promotion.replace('.00', '')}</span></Title>
              <hr />
              <Title level={5} style={total}><span>Total Amount</span> <span>{viewInvoice.totalAmount}</span></Title>
            </div>
          </div>
      </Layout>
    </Layout>
    <div style={btnContainer}>
      <Button variant="solid" color="green" className="print">Print</Button>
    </div>
  </div>
  )
}

export default ViewInvoice
