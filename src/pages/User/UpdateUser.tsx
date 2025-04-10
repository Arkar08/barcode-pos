import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FindContext } from "../../context/FindContext";
import { UserContext } from "../../context/UserContext";

const {Title} = Typography;

const UpdateUser = () => {

    const navigate = useNavigate()
    const {id} = useParams()
      const context1= useContext(FindContext)
      const context = useContext(UserContext)


  const CancelClick = () =>{
    return(
      navigate('/users')
    )
  }

  if(!context){
    throw Error("userContext does not provide in userContext Provider")
  }

  const {setEditId,editUser,editUserChange,updateUser,townshipActive,stateEditChange,editTownship,townshipEditChange} = context;


  useEffect(()=>{
    setEditId(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])


  if(!context1){
    throw Error("roleContext does not provide in role Provider")
  }
  
  const{roles,state} = context1;


  

  return (
    <div className="createContainer">
    <Title level={3} className="createText">Update User</Title>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Full Name</Title>
          <Input placeholder="Full Name" className="inputBox" value={editUser.fullName} name="fullName" onChange={editUserChange} autoComplete="off"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Email</Title>
          <Input placeholder="example@gmail.com" className="inputBox" value={editUser.email} name="email" onChange={editUserChange} autoComplete="off"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Password</Title>
          <Input.Password placeholder="Password" className="inputpasswordBox" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} value={editUser.password} name="password" onChange={editUserChange} autoComplete="off"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Role</Title>
             <Select
                style={{ width: '100%' }}
                className="selectBox"
                options={roles}
                value={editUser.roleId}
                disabled
              />
          </div>
        </Col>
       {
        editUser.roleId === 3 && (
         <>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter ComanyName</Title>
                <Input placeholder="companyName" className="inputBox" value={editUser.companyName} name="companyName" onChange={editUserChange} autoComplete="off"/>
              </div>
            </Col>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter Description</Title>
                <Input placeholder="description" className="inputBox" value={editUser.description} name="description" onChange={editUserChange} autoComplete="off"/>
              </div>
            </Col>
         </>
        )
       }
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Phone Number</Title>
          <Input placeholder="09123456789" className="inputBox" type="number" value={editUser.phNumber} name="phNumber" onChange={editUserChange} autoComplete="off"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Choose State</Title>
           <Select
              style={{ width: '100%' }}
              className="selectBox"
              onChange={stateEditChange}
              options={state}
              value={editUser.state}
            />
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Choose Township</Title>
           <Select
               style={{ width: '100%' }}
              className="selectBox"
              onChange={townshipEditChange}
              value={editUser.township}
              disabled={townshipActive}
              options={editTownship}
            />
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Address</Title>
          <Input placeholder="Address" className="inputBox" value={editUser.address} name="address" onChange={editUserChange} autoComplete="off"/>
        </div>
      </Col>
    </Row>
    <div className="btnGroup">
      <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
      <Button type="primary" className="cancel1" onClick={updateUser}>Save</Button>
    </div>
  </div>
  )
}

export default UpdateUser
