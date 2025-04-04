import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const {Title} = Typography;


const CreateUser = () => {

  const navigate = useNavigate()
  const [role,setRole] = useState<string>('')

  const handleChange = ((value:string)=>{
    console.log(value)
  })

  const CancelClick = () =>{
    return(
      navigate('/users')
    )
  }

  const handleRoleChange = ((value:string)=>{
    setRole(value)
  })
  
  

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create User</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter First Name</Title>
            <Input placeholder="First Name" className="inputBox"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Last Name</Title>
            <Input placeholder="Last Name" className="inputBox"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Email</Title>
            <Input placeholder="example@gmail.com" className="inputBox"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Role</Title>
             <Select
                defaultValue='Select Role'
                style={{ width: '100%' }}
                className="selectBox"
                onChange={handleRoleChange}
                options={[
                  {value:"Select Role",label:"Select Role"},
                  { value: 'admin', label: 'Admin' },
                  { value: 'supplier', label: 'Supplier' },
                  { value: 'customer', label: 'Customer' },
                ]}
              />
          </div>
        </Col>
       {
        role === 'supplier' && (
         <>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter ComanyName</Title>
                <Input placeholder="companyName" className="inputBox"/>
              </div>
            </Col>
            <Col span={8} className="gutter-row">
              <div>
                <Title level={5}>Enter Description</Title>
                <Input placeholder="description" className="inputBox"/>
              </div>
            </Col>
         </>
        )
       }
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Password</Title>
            <Input.Password placeholder="Password" className="inputpasswordBox" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Phone Number</Title>
            <Input placeholder="09123456789" className="inputBox" type="number"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose State</Title>
             <Select
                style={{ width: '100%' }}
                className="selectBox"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Township</Title>
             <Select
                 style={{ width: '100%' }}
                className="selectBox"
                onChange={handleChange}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Address</Title>
            <Input placeholder="Address" className="inputBox"/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={CancelClick}>Create</Button>
      </div>
    </div>
  )
}

export default CreateUser
