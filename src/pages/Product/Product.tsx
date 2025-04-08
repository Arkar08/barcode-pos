import { Button, Input, Layout, Modal } from "antd";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { ProductType } from "../../utils/Type";
import { Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";
import { useContext, useState } from "react";
import FilterProduct from "./FilterProduct";
import { ProductContext } from "../../context/ProductContext";
import Axios from "../../api/ApiConfig";

const { Title } = Typography;

const columns: TableProps<ProductType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Category",
    dataIndex: "categoryName",
    key: "categoryName",
  },
  {
    title: "Supplied By",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Stock Level",
    dataIndex: "stockLevel",
    key: "stockLevel",
  },
  {
    title: "Unit Price",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/products/${record.productId}`}>
          <EditOutlined style={editStyle} />
        </Link>
        <Popconfirm
          placement="topRight"
          title="Delete User"
          description="Are you sure want to delete this user?"
          onConfirm={() => confirm(record.productId)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={deleteStyle} />
        </Popconfirm>
      </Space>
    ),
  },
];

const confirm = async(value: string) => {
  await Axios.delete(`products/${value}`).then((data) => {
    if (data.data.status === 200) {
      alert(data.data.message);
      window.location.href = "/products";
    }
  }).catch((error)=>{
    console.log(error)
  })
};

const cancel = () => {
  console.log("cancel");
};

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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  borderRadius: 5,
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

const deleteStyle: React.CSSProperties = {
  color: "red",
  fontSize: 22,
  cursor: "pointer",
};

const editStyle: React.CSSProperties = {
  color: "blue",
  fontSize: 22,
  cursor: "pointer",
};

const Product = () => {
  const [openModal, setOpenModal] = useState(false);

  const filterProduct = () => {
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

  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("productcontext must be used within a ProductProvider");
  }

  const { productList, loading, error } = context;

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Layout>
      <Title level={3} style={textStyle}>
        Product Listings
      </Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Product Name" style={inputStyle} />
        <Button style={buttonStyle1} onClick={filterProduct}>
          Filter
        </Button>
        <Link to="/products/create" style={buttonStyle}>
          <img src="/images/add-product.png" alt="userAdd" style={imageAdd} />
          <span style={buttonText}>New Product</span>
        </Link>
      </Layout>
      <Layout style={tableLayout}>
        <Table<ProductType>
          columns={columns}
          dataSource={productList}
          rowKey={(record) => record.productId}
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
        <FilterProduct />
      </Modal>
    </Layout>
  );
};

export default Product;
