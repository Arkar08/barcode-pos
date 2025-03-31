import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { useNavigate } from "react-router-dom";

const {Title} = Typography;

const CreateCategory = () => {

  const navigate = useNavigate()


  const CancelClick = () =>{
    return(
      navigate('/category')
    )
  }

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create New Category</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Category Name</Title>
            <Input placeholder="Category Name" className="inputBox"/>
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

export default CreateCategory
