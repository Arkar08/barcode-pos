import { Button, Layout } from "antd"
import { Typography } from "antd";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";

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
  height:'300px',
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

const productHeader:React.CSSProperties = {
  display:"flex",
  justifyContent:"space-evenly",
  gap:'10px',
  alignItems:"center",
  width:"500px",
}

const productFooter:React.CSSProperties ={
  display:"flex",
  justifyContent:"space-evenly",
  marginTop:'10px',
  overflow:"auto",
  width:"500px",
}

const productText:React.CSSProperties = {
  padding:'10px'
}


const ViewOrder = () => {

  const navigate = useNavigate()
  const {id} = useParams();

  const context = useContext(OrderContext)
  if(!context){
    throw new Error("orderContext must be used within a orderProvider");
  }

  const{setEditId,viewOrder} = context

  useEffect(()=>{
    setEditId(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const backToInvoice = () =>{
    navigate("/orders")
  }

  const createInvoice = () =>{
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
              Order No - {viewOrder.orderNo}
            </Title>
            <Title level={5}>Order Date - {viewOrder.orderDate}</Title>
          </div>
          <div style={textDetailContainer}>
            <Title level={5}>
              Customer Name - {viewOrder.fullName}
            </Title>
          </div>
          <div style={productList}>
            <div style={productHeader}>
                <p style={productText}>Product Name</p>
                <p style={productText}>Quantity</p>
                <p style={productText}>Price</p>
            </div>
            <div>
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                viewOrder.productLists?.map((product:any)=>{
                  return (
                    <div style={productFooter}>
                      <p style={productText}>{product.productName}</p>
                      <p style={productText}>{product.qty}</p>
                      <p style={productText}>{product.price}</p>
                    </div>
                  )
                })
              }
            </div>
           
          </div>
          <div style={footer}>
            <div>
              <Title level={5} style={total}><span>Total Price-</span> <span>{Number(viewOrder.totalAmount)+ Number(viewOrder.promotion)}</span></Title>
              <Title level={5} style={total}><span>Promotion-</span> <span>{viewOrder.promotion}</span></Title>
              <hr />
              <Title level={5} style={total}><span>Total Amount-</span> <span>{viewOrder.totalAmount}</span></Title>
            </div>
          </div>
        </Layout>
      </Layout>
      <div style={btnContainer}>
        <Button variant="solid" color="green" className="print" onClick={createInvoice}>Create Invoice</Button>
      </div>
    </div>
  )
}

export default ViewOrder
