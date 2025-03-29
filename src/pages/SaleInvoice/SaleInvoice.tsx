import { Button, Input, Layout } from "antd";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { InvoiceType } from "../../utils/Type";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
    render:(_,record) =>{
      return (
        <>
          {
            record.promotion === null && (
              <p style={textStyle1}>-</p>
            )
          }
        </>
      )
    }
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
    render: () => ( //_, record
      <Space size="middle">
        <EyeOutlined style={editStyle} />
      </Space>
    ),
  },
];

const data: InvoiceType[] = [
  {
    invoiceId:"1",
    customerName: "John Brown",
    qty:3,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    invoiceDate:'string'
  },
  {
    invoiceId:"2",
    customerName: "John Brown",
    qty:3,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    invoiceDate:'string'
  },
  {
    invoiceId:"3",
    customerName: "John Brown",
    qty:3,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    invoiceDate:'string'
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

const buttonStyle:React.CSSProperties = {
  height:40,
  width:250,
  backgroundColor:"#7070db",
  color:'white',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap:10,
  borderRadius:5
}

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

const imageAdd: React.CSSProperties = {
  width: "25px",
  height: "25px",
};

const buttonText: React.CSSProperties = {
  fontSize: 16,
};

const editStyle:React.CSSProperties = {
  color:'blue',
  fontSize:22,
  cursor:'pointer'
}

const textStyle1:React.CSSProperties = {
  textAlign:'center',
  fontSize:22
}

const SaleInvoice = () => {
  return (
    <Layout>
      <Title level={3} style={textStyle}>Sale Invoice Listings</Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Invoice" style={inputStyle}/>
        <Button style={buttonStyle1}>Filter</Button>
        <Link to='/invoice/create' style={buttonStyle}>
          <img src="/images/add-to-cart.png" alt="userAdd" style={imageAdd}/>
          <span style={buttonText}>Create Invoice</span>
        </Link>
      </Layout>
      <Layout style={tableLayout}>
        <Table<InvoiceType> columns={columns} dataSource={data} rowKey={(record) => record.invoiceId}/>
      </Layout>
    </Layout>
  )
}

export default SaleInvoice
