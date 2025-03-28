import { Outlet } from "react-router-dom"
import {Layout } from 'antd';
import Sidebar from "./Sidebar";
import { dummyData } from "../utils/DummyData";


const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#7070db',
  borderBottom:'1px solid white'
};

const siderStyle: React.CSSProperties = {
  backgroundColor: 'white',
};

const contentStyle: React.CSSProperties = {
  padding:20
}

const layoutStyle = {
  overflow: 'hidden',
  height:'100vh'
};

const { Header, Sider, Content } = Layout;
const Layouts = () => {
  return (
    <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider width="16%" style={siderStyle}>
              {
                dummyData.map((data,index)=>{
                  return(
                    <Sidebar key={index} data={data}/>
                  )
                })
              }
            </Sider>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
        </Layout>
  </Layout>
  )
}

export default Layouts
