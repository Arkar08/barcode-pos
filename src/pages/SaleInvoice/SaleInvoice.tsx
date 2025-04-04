import { Button, Input, Layout, Modal } from "antd";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { InvoiceType } from "../../utils/Type";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import FilterInvoice from "./FilterInvoice";
import { useContext, useState } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

const { Title } = Typography;

const columns: TableProps<InvoiceType>["columns"] = [
  {
    title: "Invoice No.",
    dataIndex: "invoiceId",
    key: "invoiceId",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Quantity",
    key: "qty",
    dataIndex: "qty",
  },
  {
    title: "Promotion",
    dataIndex: "promotion",
    key: "promotion",
    render: (_, record) => {
      return <>{record.promotion === null && <p style={textStyle1}>-</p>}</>;
    },
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
  {
    title: "Payment",
    dataIndex: "payment",
    key: "payment",
  },
  {
    title: "Invoice Date",
    dataIndex: "invoiceDate",
    key: "invoiceDate",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/invoice/${record.invoiceId}`}>
          <EyeOutlined style={editStyle} />
        </Link>
      </Space>
    ),
  },
];


const filderLayout: React.CSSProperties = {
  height: 80,
  display: "flex",
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
  justifyContent: "start",
  padding: "20px",
  borderRadius: 10,
  boxShadow: "1px 1px 2px black",
};

const inputStyle: React.CSSProperties = {
  height: 40,
};

// const buttonStyle:React.CSSProperties = {
//   height:40,
//   width:250,
//   backgroundColor:"#7070db",
//   color:'white',
//   display:'flex',
//   justifyContent:'center',
//   alignItems:'center',
//   gap:10,
//   borderRadius:5
// }

const buttonStyle1: React.CSSProperties = {
  height: 40,
  width: 150,
  backgroundColor: "#7070db",
  color: "white",
};

const tableLayout: React.CSSProperties = {
  maxHeight: "calc(100vh - 250px)",
  height: "calc(100vh - 250px)",
  boxShadow: "1px 1px 2px black",
  marginTop: 20,
  padding: "10px",
  borderRadius: 10,
};

const textStyle: React.CSSProperties = {
  color: "#7070db",
};

// const imageAdd: React.CSSProperties = {
//   width: "25px",
//   height: "25px",
// };

// const buttonText: React.CSSProperties = {
//   fontSize: 16,
// };

const editStyle: React.CSSProperties = {
  color: "blue",
  fontSize: 22,
  cursor: "pointer",
};

const textStyle1: React.CSSProperties = {
  textAlign: "center",
  fontSize: 22,
};

const SaleInvoice = () => {
  const [openModal, setOpenModal] = useState(false);

  const filterInvoice = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    console.log("ok");
    setOpenModal(false);
  };

  const handleCancel = () => {
    console.log("cancel");
    setOpenModal(false);
  };

  const context = useContext(InvoiceContext);

  if (!context) {
    throw new Error("invoiceContext must be used within a invoiceProvider");
  }

  const { invoiceList, loading, error } = context;

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <Title level={3} style={textStyle}>
        Sale Invoice Listings
      </Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Invoice" style={inputStyle} />
        <Button style={buttonStyle1} onClick={filterInvoice}>
          Filter
        </Button>
        {/* <Link to='/invoice/create' style={buttonStyle}>
          <img src="/images/add-to-cart.png" alt="userAdd" style={imageAdd}/>
          <span style={buttonText}>Create Invoice</span>
        </Link> */}
      </Layout>
      <Layout style={tableLayout}>
        <Table<InvoiceType>
          columns={columns}
          dataSource={invoiceList}
          rowKey={(record) => record.invoiceId}
        />
      </Layout>
      <Modal
        open={openModal}
        title="Filter User"
        onOk={handleOk}
        onCancel={handleCancel}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        centered
        footer={[
          <Button
            key="back"
            variant="solid"
            color="red"
            onClick={handleCancel}
            className="modalBtn"
          >
            Reset
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            className="modalBtn"
          >
            Filter
          </Button>,
        ]}
      >
        <FilterInvoice />
      </Modal>
    </Layout>
  );
};

export default SaleInvoice;
