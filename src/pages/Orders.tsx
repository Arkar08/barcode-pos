import { Button, Input, Layout } from "antd";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { OrderType } from "../utils/Type";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title } = Typography;

const columns: TableProps<OrderType>["columns"] = [
  {
    title: "Order No.",
    dataIndex: "orderId",
    key: "orderId",
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
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "Delivery Date",
    dataIndex: "deliveryDate",
    key: "deliveryDate",
    render:(_,record) =>{
      return (
        <>
          {
            record.deliveryDate === null && (
              <p style={textStyle1}>-</p>
            )
          }
        </>
      )
    }
  },
  {
    title: "Action",
    key: "action",
    render: () => ( //_, record
      <Space size="middle">
          <EyeOutlined style={editStyle}/>
      </Space>
    ),
  },
];

const data: OrderType[] = [
  {
    orderId:"1",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
  },
  {
    orderId:"2",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
  },
  {
    orderId:"3",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
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

const buttonStyle: React.CSSProperties = {
  height: 40,
  width: 250,
  backgroundColor: "#7070db",
  color: "white",
};

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

const textStyle1:React.CSSProperties = {
  textAlign:'center',
  fontSize:22
}

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

const Orders = () => {
  return (
    <Layout>
      <Title level={3} style={textStyle}>
        Order Listings
      </Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Order" style={inputStyle} />
        <Button style={buttonStyle1}>Filter</Button>
        <Button style={buttonStyle}>
          <img src="/images/add-item.png" alt="userAdd" style={imageAdd} />
          <span style={buttonText}>Create Order</span>
        </Button>
      </Layout>
      <Layout style={tableLayout}>
        <Table<OrderType> columns={columns} dataSource={data} rowKey={(record) => record.orderId} />
      </Layout>
    </Layout>
  );
};

export default Orders;
