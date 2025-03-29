import { Button, Input, Layout } from "antd"
import { Space,Table } from 'antd';
import type { TableProps } from 'antd';
import { UserType } from "../utils/Type";
import { Typography } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

const columns:TableProps<UserType>['columns'] = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phNumber',
    key: 'phNumber',
  },
  {
    title: 'State',
    key: 'state',
    dataIndex: 'state',
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: 'Township',
    dataIndex: 'township',
    key: 'township',
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

const data: UserType[] = [
  {
    userId:'1',
    name: 'John Brown',
    email: 'john@gmail.com',
    phNumber: 978595545,
    state:'Yangon',
    township:'mingalar'
  },
  {
    userId:'2',
    name: 'John Brown',
    email: 'john@gmail.com',
    phNumber: 978595545,
    state:'Yangon',
    township:'mingalar'
  },
  {
    userId:'3',
    name: 'John Brown',
    email: 'john@gmail.com',
    phNumber: 978595545,
    state:'Yangon',
    township:'mingalar'
  },
  {
    userId:'4',
    name: 'John Brown',
    email: 'john@gmail.com',
    phNumber: 978595545,
    state:'Yangon',
    township:'mingalar'
  },
  {
    userId:'5',
    name: 'John Brown',
    email: 'john@gmail.com',
    phNumber: 978595545,
    state:'Yangon',
    township:'mingalar'
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
  color:'white'
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

const UserListing = () => {
  return (
    <Layout>
      <Title level={3} style={textStyle}>User Listings</Title>
      <Layout style={filderLayout}>
        <Input placeholder="Search Full Name" style={inputStyle}/>
        <Button style={buttonStyle1}>Filter</Button>
        <Button style={buttonStyle}>
          <img src="/images/add-user.png" alt="userAdd" style={imageAdd}/>
          <span style={buttonText}>New User</span>
        </Button>
      </Layout>
      <Layout style={tableLayout}>
        <Table<UserType> columns={columns} dataSource={data} rowKey={(record) => record.userId}/>
      </Layout>
    </Layout>
  )
}

export default UserListing
