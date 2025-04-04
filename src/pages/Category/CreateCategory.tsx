import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";

const {Title} = Typography;

const CreateCategory = () => {


    const context = useContext(CategoryContext);
  
    if (!context) {
      throw new Error("categoryContext must be used within a CountryProvider");
    }
  
    const {categoryText,categoryChange,createCategory,error,CancelClick} = context;

    if(error){
      alert(error)
    }



  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create New Category</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Category Name</Title>
            <Input placeholder="Category Name" className="inputBox" value={categoryText} onChange={(e)=>categoryChange(e.target.value)}/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={createCategory}>Create</Button>
      </div>
    </div>
  )
}

export default CreateCategory
