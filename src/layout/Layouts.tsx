import { Outlet } from "react-router-dom"
import {Layout } from 'antd';
import Sidebar from "./Sidebar";
import { dummyData } from "../utils/DummyData";
import Navbar from "./Navbar";
import navbarReducer from "../store/store";


const headerStyle: React.CSSProperties = {
  height: 64,
  paddingInline: 48,
  backgroundColor: '#7070db',
  borderBottom:'1px solid white'
};

const siderStyle: React.CSSProperties = {
  backgroundColor: 'white',
  width:"16%"
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

  const active = navbarReducer((state)=>state.active)

  return (
    <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Navbar/>
        </Header>
        <Layout>
            <Sider width={active? '3%':'16%'} style={siderStyle}>
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
