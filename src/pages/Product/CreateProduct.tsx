import { Button, Typography } from "antd"
import { Col, Row } from 'antd';
import { Input } from 'antd';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext";
import { FindContext } from "../../context/FindContext";
import { ProductContext } from "../../context/ProductContext";

const {Title} = Typography;


const CreateProduct = () => {

  
  const navigate = useNavigate()

  const context = useContext(CategoryContext)
  const context1 = useContext(FindContext)
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
  const {supplier} = context1;
  const{createProduct,handleChange,CreateProductList} = context2;

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
      <Title level={3} className="createText">Create New Product</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Product Name</Title>
            <Input placeholder="Product Name" className="inputBox" value={createProduct.productName} name="productName" onChange={handleChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose Supplier</Title>
            <select style={{ width: '100%' }} className="selectBox" value={createProduct.userId} name="userId"  onChange={handleChange}>
                <option value="">Select Supplier</option>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  supplier?.map((user:any)=>{
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
            <select style={{ width: '100%' }} className="selectBox" value={createProduct.categoryId} name="categoryId"  onChange={handleChange}>
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
            <Input placeholder="0" className="inputBox" type="number" value={createProduct.stockLevel} name="stockLevel"  onChange={handleChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Price</Title>
            <Input placeholder="0" className="inputBox" type="number" value={createProduct.price} name="price"  onChange={handleChange}/>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Enter Description</Title>
            <Input placeholder="description" className="inputBox" value={createProduct.description} name="description"  onChange={handleChange}/>
          </div>
        </Col>
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={CreateProductList}>Create</Button>
      </div>
    </div>
  )
}

export default CreateProduct
