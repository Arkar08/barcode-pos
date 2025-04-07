
import { Button, Modal, Typography } from "antd"
import { Col, Row,Table,Space } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
import {ProductOrder } from "../../utils/Type";
import type { TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
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
    key: "price",
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

const data: ProductOrder[] = [
  {
    qty:4,
    productName:'mongon2',
    price: 1000
  },
  {
    qty:4,
    productName:'mongon1',
    price: 1000
  },
  {
    qty:4,
    productName:'mongon',
    price: 1000
  },
];

const CreateOrder = () => {

  const navigate = useNavigate()

  const [openModal,setOpenModal] = useState(false)
      
        const AddProduct = () =>{
          setOpenModal(true)
        }
      
        const handleOk = () => {
          console.log('ok')
          setOpenModal(false)
        };

        const handleOk1 = () => {
          console.log('ok')
          setOpenModal(false)
        };
      
        const handleCancel = () => {
          console.log('cancel')
          setOpenModal(false)
        };

  const handleChange = ((value:string)=>{
    console.log(value)
  })

  const CancelClick = () =>{
    return(
      navigate('/orders')
    )
  }

    const context = useContext(FindContext)
    const context1 = useContext(OrderContext)

    if(!context){
      throw new Error("CategoryContext must be used within a CategoryProvider");
    }

    if(!context1){
      throw new Error("orderContext must be used within a OrderProvider");
    }
  

    const{customers} = context;
    const {activeQty} = context1;

  return (
    <div className="createContainer">
      <Title level={3} className="createText">Create New Order</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={8} className="gutter-row">
          <div>
            <Title level={5}>Choose CustomerName</Title>
            <select style={{ width: '100%' }} className="selectBox">
                <option value="">Select Customer</option>
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  customers?.map((user:any)=>{
                    return(
                      <option value={user.userId} key={user.userId}>{user.fullName}</option>
                    )
                  })
                }
            </select>
          </div>
        </Col>
        <Col span={8} className="gutter-row">
          <div className="AddBtn">
                <Button type="primary" className="btnAdd" onClick={AddProduct}> + Add Product</Button>
                  <Modal
                    open={openModal}
                    title="Add Product"
                    onOk={handleOk}
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
                     </Button>,
                      <Button key="addAndContinue" variant='solid' color="purple" onClick={handleOk} className="modalBtn"  disabled={activeQty}>
                        Add & Continue
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
      </Row>
      <Table<ProductOrder> columns={columns} dataSource={data} rowKey={(record) => record.productName} className="tableOrder"/>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8} className="gutter-row">
            <div>
              <Title level={5}>Quantity</Title>
              <Input placeholder="0" className="inputBox" type="number"/>
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div>
              <Title level={5}>Promotion</Title>
              <Input placeholder="0" className="inputBox" type="number"/>
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div>
              <Title level={5}>Total Amount</Title>
              <Input placeholder="Total" className="inputBox" type="number"/>
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div>
              <Title level={5}>Payment Type</Title>
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
      </Row>
      <div className="btnGroup">
        <Button variant="solid" color="red" className="cancel" onClick={CancelClick}>Cancel</Button>
        <Button type="primary" className="cancel1" onClick={CancelClick}> Order Booking</Button>
      </div>
    </div>
  )
}

export default CreateOrder
