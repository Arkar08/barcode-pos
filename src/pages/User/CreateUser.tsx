import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { FindContext } from "../../context/FindContext";

const {Title} = Typography;


const CreateUser = () => {

  const navigate = useNavigate()
  const context = useContext(UserContext)
  const context1= useContext(FindContext)

  if(!context){
    throw Error("usercontext does not provide in user Provider")
  }

  if(!context1){
    throw Error("roleContext does not provide in role Provider")
  }

  const {createUserList,handleUserChange,createUser,handleRoleChange,stateChange,townshipActive,township,townshipChange,active} = context;
  const{roles,state} = context1;


  const CancelClick = () =>{
    return(
      navigate('/users')
    )
  }

  
  

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create User</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Full Name</Title>
            <Input placeholder="Full Name" className="inputBox" value={createUserList.fullName} autoComplete="off" name="fullName" onChange={handleUserChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Email</Title>
            <Input placeholder="example@gmail.com" className="inputBox" value={createUserList.email} name="email" autoComplete="off" onChange={handleUserChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Password</Title>
            <Input.Password placeholder="Password" className="inputpasswordBox" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} value={createUserList.password} name="password" onChange={handleUserChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Role</Title>
             <Select
                placeholder='Select Role'
                style={{ width: '100%' }}
                className="selectBox"
                onChange={handleRoleChange}
                value={createUserList.role}
                options={roles}
              />
          </div>
        </Col>
       {
        active && (
         <>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter ComanyName</Title>
                <Input placeholder="companyName" className="inputBox" value={createUserList.companyName} autoComplete="off" name="companyName" onChange={handleUserChange}/>
              </div>
            </Col>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter Description</Title>
                <Input placeholder="description" className="inputBox" value={createUserList.description} autoComplete="off" name="description" onChange={handleUserChange}/>
              </div>
            </Col>
         </>
        )
       }
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Phone Number</Title>
            <Input placeholder="09123456789" className="inputBox" type="number" value={createUserList.phNumber} name="phNumber" onChange={handleUserChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose State</Title>
             <Select
                style={{ width: '100%' }}
                className="selectBox"
                onChange={stateChange}
                value={createUserList.state}
                options={state}
              />
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Township</Title>
             <Select
                 style={{ width: '100%' }}
                className="selectBox"
                onChange={townshipChange}
                value={createUserList.township}
                disabled={townshipActive}
                options={township}
              />
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Address</Title>
            <Input placeholder="Address" className="inputBox" value={createUserList.address} autoComplete="off" name="address" onChange={handleUserChange}/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={createUser}>Create</Button>
      </div>
    </div>
  )
}

export default CreateUser
