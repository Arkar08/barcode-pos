import { Button, Input, Layout } from "antd";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { SupplierType } from "../../utils/Type";
import { Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const columns: TableProps<SupplierType>["columns"] = [
  {
    title: "Supplier Name",
    dataIndex: "supplierName",
    key: "supplierName",
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Phone Number",
    dataIndex: "phNumber",
    key: "phNumber",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Township",
    key: "township",
    dataIndex: "township",
  },
  {
    title: "Action",
    key: "action",
    render: () => ( //_, record
      <Space size="middle">
        <EditOutlined style={editStyle} />
        <DeleteOutlined style={deleteStyle}/>
      </Space>
    ),
  },
];

const data: SupplierType[] = [
  {
    supplierId: "1",
    supplierName: "John Brown",
    companyName: "32",
    phNumber:12345,
    state: "New York No. 1 Lake Park",
    township: 'hello',
  },
  {
    supplierId: "2",
    supplierName: "Jim Green",
    companyName: "42",
    phNumber:12345,
    state: "London No. 1 Lake Park",
    township:'hello',
  },
  {
    supplierId: "3",
    supplierName: "Joe Black",
    companyName: "32",
    phNumber:12345,
    state: "Sydney No. 1 Lake Park",
    township: 'hello',
  },
  {
    supplierId: "4",
    supplierName: "John Brown",
    companyName: "32",
    phNumber:12345,
    state: "New York No. 1 Lake Park",
    township: 'hello',
  },
  {
    supplierId: "5",
    supplierName: "Jim Green",
    companyName: "42",
    phNumber:12345,
    state: "London No. 1 Lake Park",
    township:'hello',
  },
];

const deleteStyle:React.CSSProperties = {
  color:'red',
  fontSize:22,
  cursor:'pointer'
}

const editStyle:React.CSSProperties = {
  color:'blue',
  fontSize:22,
  cursor:'pointer'
}

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

const Supplier = () => {
  return (
    <Layout>
        <Title level={3} style={textStyle}>Supplier Listings</Title>
        <Layout style={filderLayout}>
          <Input placeholder="Search Supplier" style={inputStyle}/>
          <Button style={buttonStyle1}>Filter</Button>
          <Link to='/supplier/create' style={buttonStyle}>
            <img src="/images/round (1).png" alt="userAdd" style={imageAdd}/>
            <span style={buttonText}>New Supplier</span>
          </Link>
        </Layout>
        <Layout style={tableLayout}>
          <Table<SupplierType> columns={columns} dataSource={data} rowKey={(record) => record.supplierId}/>
        </Layout>
    </Layout>
  )
}

export default Supplier
