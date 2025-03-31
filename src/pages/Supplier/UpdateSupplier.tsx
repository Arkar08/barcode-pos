import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";

const {Title} = Typography;

const UpdateSupplier = () => {

  const navigate = useNavigate()

  const handleChange = ((value:any)=>{
    console.log(value)
  })

  const CancelClick = () =>{
    return(
      navigate('/supplier')
    )
  }

  return (
    <div className="createContainer">
    <Title level={3} className="createText">Update Supplier</Title>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Supplier Name</Title>
          <Input placeholder="Supplier Name" className="inputBox"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Company Name</Title>
          <Input placeholder="Company Name" className="inputBox"/>
        </div>
      </Col>
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Company's Email</Title>
          <Input placeholder="example@gmail.com" className="inputBox"/>
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
      <Col span={8} className="gutter-row">
        <div>
          <Title level={5}>Enter Remarks</Title>
          <Input placeholder="Remarks" className="inputBox"/>
        </div>
      </Col>
    </Row>
    <div className="btnGroup">
      <Button variant="solid" danger className="cancel" onClick={CancelClick}>Cancel</Button>
      <Button type="primary" className="cancel1" onClick={CancelClick}>Update</Button>
    </div>
    </div>
  )
}

export default UpdateSupplier
