
import { Button, Modal, Typography } from "antd"
import { Col, Row,Table,Space } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
import {ProductOrder } from "../../utils/Type";
import type { TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import AddProduct2 from "./AddProduct";
import { FindContext } from "../../context/FindContext";
import { OrderContext } from "../../context/OrderContext";

const {Title} = Typography;

const editStyle:React.CSSProperties = {
  color:'blue',
  fontSize:22,
  cursor:'pointer'
}

const deleteStyle:React.CSSProperties = {
  color:'red',
  fontSize:22,
  cursor:'pointer'
}

const columns: TableProps<ProductOrder>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Quantity",
    key: "qty",
    dataIndex: "qty",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Action",
    key: "action",
    render: () => ( //_, record
      <Space size="middle">
          <EditOutlined style={editStyle} />
          <DeleteOutlined style={deleteStyle} />
      </Space>
    ),
  },
];

const CreateOrder = () => {

  const navigate = useNavigate()

  const context2 = useContext(OrderContext)

  if(!context2){
    throw new Error("orderContext must be used within a orderProvider");
  }
  const {orderData,setOrderData,setPostOrder} = context2

  const [openModal,setOpenModal] = useState(false)
  const [totalAmount,setTotalAmount] = useState(0) 
  const [promotion,setPromotion] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [orders,setOrders] = useState<any[]>([])
  const [active,setActive] = useState(false)
      
        const AddProduct = () =>{
          setOpenModal(true)
        }
    
        const handleOk1 = () => {
            localStorage.setItem("orders",JSON.stringify(orderData))
            const data = localStorage.getItem("orders")
            if(data){
              const dummy = JSON.parse(data)
              setOrders((prev)=>[...prev,dummy])
              setOrderData({
                qty:0,
                productName:'',
                price:0
              })
              setOpenModal(false)
            }     
        };
      
        const handleCancel = () => {
          console.log('cancel')
          setOpenModal(false)
        };


  const CancelClick = () =>{
    return(
      navigate('/orders')
    )
  }

  const handlePaymentChange = (value:string)=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setPostOrder((prev:any)=>{
      return {
        ...prev,
        payment:value,
        promotion:promotion,
        productLists:orders
      }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userIdChange = (event:any)=>{
    if(event.target.value === ''){
      setActive(false)
    }else{
      setActive(true)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return setPostOrder((prev:any)=>{
          return{
            ...prev,
            userId:event.target.value
          }
        })
    }
  }

  useEffect(()=>{
    const total = orders.reduce((acc,sum)=>{
      return acc + sum.price
    },0)
    const sumTotal = total - promotion;
    setTotalAmount(sumTotal)
  },[orders, promotion])


  const promotionChange = ((value:string)=>{
    setPromotion(Number(value))
  })

    const context = useContext(FindContext)
    const context1 = useContext(OrderContext)

    if(!context){
      throw new Error("CategoryContext must be used within a CategoryProvider");
    }

    if(!context1){
      throw new Error("orderContext must be used within a OrderProvider");
    }
  

    const{customers} = context;
    const {activeQty,createOrder,postOrder} = context1;

  
  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create New Order</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose CustomerName</Title>
            <select style={{ width: '100%' }} className="selectBox" value={postOrder.userId} name="userId" onChange={(event)=>userIdChange(event)}>
                <option value="">Select Customer</option>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  customers?.map((user:any)=>{
                    return(
                      <option value={user.userId} key={user.userId} className="boxText">{user.fullName}</option>
                    )
                  })
                }
            </select>
          </div>
        </Col>
        {
          active && (
            <>
              <Col span={8} className="gutter-row">
                <div className="AddBtn">
                      <Button type="primary" className="btnAdd" onClick={AddProduct}> + Add Product</Button>
                        <Modal
                          open={openModal}
                          title="Add Product"
                          onOk={handleOk1}
                          onCancel={handleCancel}
                          width={{
                            xs: '90%',
                            sm: '80%',
                            md: '70%',
                            lg: '60%',
                            xl: '50%',
                            xxl: '40%',
                          }}
                          centered
                          footer={[
                            <Button key="back" variant="solid" color="red" onClick={handleCancel} className="modalBtn">
                              Cancel
                            </Button>,
                            <Button key="add" variant='solid' color="purple" onClick={handleOk1} className="modalBtn" disabled={activeQty}>
                            Add
                          </Button>
                          ]}
                        >
                          <AddProduct2 />
                        </Modal>
                </div>
              </Col>
              <Col span={8} className="gutter-row">
                <div className="scannerContainer">
            <img src="/images/barcode.png" alt="scan_photo" className="scanner"/>
                </div>
              </Col>
            </>
          )
        }
      </Row>
      {
        active && (
            <>
              <Table<ProductOrder> columns={columns} dataSource={orders} rowKey={(record) => record.id} className="tableOrder"/>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8} className="gutter-row">
                    <div>
                      <Title level={5}>Quantity</Title>
                      <Input placeholder="0" className="inputBox" type="number" disabled value={orders.length}/>
                    </div>
                  </Col>
                  <Col span={8} className="gutter-row">
                    <div>
                      <Title level={5}>Promotion</Title>
                      <Input placeholder="0" className="inputBox" type="number" value={promotion} onChange={(event)=>promotionChange(event.target.value)}/>
                    </div>
                  </Col>
                  <Col span={8} className="gutter-row">
                    <div>
                      <Title level={5}>Total Amount</Title>
                      <Input placeholder="Total" className="inputBox" type="number" value={totalAmount} disabled/>
                    </div>
                  </Col>
                  <Col span={8} className="gutter-row">
                    <div>
                      <Title level={5}>Payment Type</Title>
                      <Select
                        style={{ width: '100%' }}
                        className="selectBox"
                        onChange={handlePaymentChange}
                        value={postOrder.payment}
                        options={[
                          {value:"",label:"Select Payment"},
                          { value: 'Cash', label: 'Cash' },
                          { value: 'Bank', label: 'Bank' },
                          { value: 'Paypal', label: 'Paypal' },
                          { value: 'Credit_Card', label: 'Credit_Card' },
                        ]}
                      />
                    </div>
                  </Col>
              </Row>
            </>
        )
      }
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={createOrder}> Order Booking</Button>
      </div>
    </div>
  )
}

export default CreateOrder
