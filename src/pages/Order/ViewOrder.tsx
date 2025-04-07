import { Button, Layout } from "antd"
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

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
  display:"flex",
  justifyContent:"space-around",
  marginTop:'10px',
  height:'300px',
  overflow:"auto"
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


const ViewOrder = () => {

  const navigate = useNavigate()

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
              Order No - 1123
            </Title>
            <Title level={5}>Order Date - 12/12/2025</Title>
          </div>
          <div style={textDetailContainer}>
            <Title level={5}>
              Customer Name - Aung Aung
            </Title>
          </div>
          <div style={productList}>
            <div>
              <Title level={5}>Product Name</Title>
              <Title level={5}>Mango</Title>
              <Title level={5}>Mango</Title>
              <Title level={5}>Mango</Title>
              <Title level={5}>Mango</Title>
              <Title level={5}>Mango</Title>
            </div>
            <div>
              <Title level={5}>Quantity</Title>
              <Title level={5}>1</Title>
              <Title level={5}>1</Title>
              <Title level={5}>1</Title>
              <Title level={5}>1</Title>
              <Title level={5}>1</Title>
            </div>
            <div>
              <Title level={5}>Price</Title>
              <Title level={5}>10000</Title>
              <Title level={5}>10000</Title>
              <Title level={5}>10000</Title>
              <Title level={5}>10000</Title>
              <Title level={5}>10000</Title>
            </div>
          </div>
          <div style={footer}>
            <div>
              <Title level={5} style={total}><span>Total Price</span> <span>- 10000</span></Title>
              <Title level={5} style={total}><span>Promotion</span> <span>-10</span></Title>
              <hr />
              <Title level={5} style={total}><span>Total Amount</span> <span>- 10000</span></Title>
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
