import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";

const {Title} = Typography;


const UpdateProduct = () => {

    const context = useContext(CategoryContext)
    const context1 = useContext(UserContext)
    const context2 = useContext(ProductContext)
  
    if(!context){
      throw new Error("CategoryContext must be used within a CategoryProvider");
    }
  
    
    if(!context1){
      throw new Error("userContext must be used within a UserProvider");
    }

    if(!context2){
      throw new Error("productContext must be used within a UserProvider");
    }
  
  
    const {category} = context;
    const {userList} = context1;
    const {setEditProductId,editProduct,handleEditChange,updateProduct} = context2;

    const {id} = useParams()

    useEffect(()=>{
      setEditProductId(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

  const navigate = useNavigate()

  // const handleChange = ((value:string)=>{
  //   console.log(value)
  // })

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
            <Input placeholder="Product Name" className="inputBox" value={editProduct.productName} name="productName" onChange={handleEditChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Supplier</Title>
            <select style={{ width: '100%' }} className="selectBox" value={editProduct.userId} name="userId" onChange={handleEditChange}>
                <option value="">Select Supplier</option>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  userList.map((user:any)=>{
                    return(
                      <option value={user.userId} key={user.userId}>{user.fullName}</option>
                    )
                  })
                }
            </select>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Category</Title>
            <select style={{ width: '100%' }} className="selectBox" value={editProduct.categoryId} name="categoryId" onChange={handleEditChange}>
                <option value="">Select Category</option>
                {
                  category.map((cate)=>{
                    return(
                      <option value={cate.categoryId} key={cate.categoryId}>{cate.categoryName}</option>
                    )
                  })
                }
            </select>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Stock Level</Title>
            <Input placeholder="0" className="inputBox" type="number" value={editProduct.stockLevel} name="stockLevel" onChange={handleEditChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Price</Title>
            <Input placeholder="0" className="inputBox" type="number" value={editProduct.price} name="price" onChange={handleEditChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Description</Title>
            <Input placeholder="description" className="inputBox" value={editProduct.description} name="description" onChange={handleEditChange}/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={updateProduct}>Save</Button>
      </div>
    </div>
  )
}

export default UpdateProduct
