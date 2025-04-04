import { Input, Layout } from "antd"
import { Space,Table } from 'antd';
import type { TableProps } from 'antd';
import { CategoryType } from "../../utils/Type";
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {Popconfirm } from 'antd';
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import Axios from "../../api/ApiConfig";


const { Title } = Typography;


const columns: TableProps<CategoryType>['columns'] = [
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
    key: 'categoryName',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/category/${record.categoryId}`}><EditOutlined style={editStyle} /></Link>
        <Popconfirm
          placement="topRight"
          title="Delete User"
          description="Are you sure to delete this user?"
          onConfirm={()=>confirm(record.categoryId)}
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

const confirm = async(value:string) => {
  await Axios.delete(`category/${value}`).then((data)=>{
    if(data.data.status === 200){
      alert(data.data.message)
      window.location.href = '/category'
    }
  })
};

const cancel = () => {
  window.location.href = '/category'
};


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

const Category = () => {

  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("categoryContext must be used within a CountryProvider");
  }

  const { category,loading ,error} = context;

  if(loading){
    return (
      <div>loading</div>
    )
  }

  if(error){
    return(
      <div>{error}</div>
    )
  }

  return (
    <Layout>
      <Title level={3} style={textStyle}>Category Listings</Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Category Name" style={inputStyle}/>
        <Link to='/category/create' style={buttonStyle}>
          <img src="/images/menu.png" alt="userAdd" style={imageAdd}/>
          <span style={buttonText}>New Category</span>
        </Link>
      </Layout>
      <Layout style={tableLayout}>
        <Table<CategoryType> columns={columns} dataSource={category} rowKey={(record) => record.categoryId}/>
      </Layout>
    </Layout>
  )
}

export default Category
