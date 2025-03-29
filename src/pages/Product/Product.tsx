import { Button, Input, Layout } from "antd"
import { Space,Table } from 'antd';
import type { TableProps } from 'antd';
import { ProductType } from "../../utils/Type";
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;


const columns: TableProps<ProductType>['columns'] = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Supplied By',
    dataIndex: 'suppliedBy',
    key: 'suppliedBy',
  },
  {
    title:"Stock Level",
    dataIndex:'stockLevel',
    key:"stockLevel"
  },
  {
    title: 'Unit Price',
    key: 'unitPrice',
    dataIndex: 'unitPrice',
  },
  {
    title:"Description",
    dataIndex:'description',
    key:"description"
  },
  {
    title: 'Action',
    key: 'action',
    render: () => ( //_, record
      <Space size="middle">
        <EditOutlined style={editStyle} />
        <DeleteOutlined style={deleteStyle}/>
      </Space>
    ),
  },
];

const data: ProductType[] = [
  {
    productId:"1",
    productName: 'John Brown',
    unitPrice: 32,
    stockLevel: 'New York No. 1 Lake Park',
    suppliedBy: 'nice',
    category:'helloworld',
    description:'hello'
  },
  {
    productId:'2',
    productName: 'Jim Green',
    unitPrice: 42,
    stockLevel: 'London No. 1 Lake Park',
    suppliedBy: 'nice',
    category:'helloworld',
    description:'hello'
  },
  {
    productId:'3',
    productName: 'Joe Black',
    unitPrice: 32,
    stockLevel: 'Sydney No. 1 Lake Park',
    suppliedBy: 'nice',
    category:'helloworld',
    description:'hello'
  },
];


const filderLayout:React.CSSProperties = {
  height:80,
  display:'flex',
  flexDirection:"row",
  gap:10,
  alignItems:'center',
  justifyContent:'start',
  padding:'20px',
  borderRadius:10,
  boxShadow:'1px 1px 2px black'
}

const inputStyle:React.CSSProperties = {
  height:40
}

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

const buttonStyle1:React.CSSProperties = {
  height:40,
  width:150,
  backgroundColor:"#7070db",
  color:'white'
}

const tableLayout:React.CSSProperties = {
  maxHeight:"calc(100vh - 250px)",
  height:'calc(100vh - 250px)',
  boxShadow:'1px 1px 2px black',
  marginTop:20,
  padding:'10px',
  borderRadius:10
}

const textStyle:React.CSSProperties = {
  color:'#7070db'
}

const imageAdd:React.CSSProperties = {
  width:'25px',
  height:'25px'
}

const buttonText:React.CSSProperties = {
  fontSize:16
}

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

const Product = () => {
  return (
    <Layout>
        <Title level={3} style={textStyle}>Product Listings</Title>
        <Layout style={filderLayout}>
          <Input placeholder="Search Product Name" style={inputStyle}/>
          <Button style={buttonStyle1}>Filter</Button>
          <Link to='/products/create' style={buttonStyle}>
            <img src="/images/add-product.png" alt="userAdd" style={imageAdd}/>
            <span style={buttonText}>New Product</span>
          </Link>
        </Layout>
        <Layout style={tableLayout}>
          <Table<ProductType> columns={columns} dataSource={data} rowKey={(record) => record.productId}/>
        </Layout>
    </Layout>
  )
}

export default Product
