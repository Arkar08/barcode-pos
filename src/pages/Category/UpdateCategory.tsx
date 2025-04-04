import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { useContext, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext";

const {Title} = Typography;

const UpdateCategory = () => {

  const navigate = useNavigate()

  const {id} = useParams()
  
  const context = useContext(CategoryContext);
    
  if (!context) {
      throw new Error("categoryContext must be used within a CountryProvider");
  }

  const {setEditCategoryText,editText,editChange,updateCategory} = context;

  useEffect(()=>{
    return setEditCategoryText(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])



  const CancelClick = () =>{
    return(
      navigate('/category')
    )
  }

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Update Category</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Category Name</Title>
            <Input placeholder="Category Name" className="inputBox" value={editText} onChange={(e)=>editChange(e.target.value)}/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={updateCategory}>Save</Button>
      </div>
    </div>
  )
}

export default UpdateCategory
