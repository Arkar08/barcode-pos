import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";

const {Title} = Typography;


const UpdateProduct = () => {

  const navigate = useNavigate()

  const handleChange = ((value:string)=>{
    console.log(value)
  })

  const CancelClick = () =>{
    return(
      navigate('/products')
    )
  }

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Update Product</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Product Name</Title>
            <Input placeholder="Product Name" className="inputBox"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Supplier</Title>
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
            <Title level={5}>Choose Category</Title>
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
            <Title level={5}>Enter Stock Level</Title>
            <Input placeholder="09123456789" className="inputBox" type="number"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Price</Title>
            <Input placeholder="0" className="inputBox" type="number"/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Description</Title>
            <Input placeholder="description" className="inputBox"/>
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

export default UpdateProduct
