import { Button, Input, Layout } from "antd";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { DataType1 } from "../utils/Type";
import { Typography } from "antd";

const { Title } = Typography;

const columns: TableProps<DataType1>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType1[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "5",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "8",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "9",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "10",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "11",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "12",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "13",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "14",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "15",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
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

const imageAdd: React.CSSProperties = {
  width: "25px",
  height: "25px",
};

const buttonText: React.CSSProperties = {
  fontSize: 16,
};

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
          <span style={buttonText}>New Order</span>
        </Button>
      </Layout>
      <Layout style={tableLayout}>
        <Table<DataType1> columns={columns} dataSource={data} />
      </Layout>
    </Layout>
  );
};

export default Orders;
