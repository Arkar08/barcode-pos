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
            <Title level={5}>
              Customer Name - Aung Aung
            </Title>
          </div>
          <Title level={5}>Delivery Date - 12/12/2025</Title>
        </Layout>
      </Layout>
      <div style={btnContainer}>
        <Button variant="solid" color="green" className="print" onClick={createInvoice}>Create Invoice</Button>
      </div>
    </div>
  )
}

export default ViewOrder
