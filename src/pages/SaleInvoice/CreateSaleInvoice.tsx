import { Button, Modal, Typography } from "antd"
import { Col, Row,Table,Space } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { OrderType } from "../../utils/Type";
import type { TableProps } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import InvoiceProduct from "./InvoiceProduct";

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


const columns: TableProps<OrderType>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Quantity",
    key: "qty",
    dataIndex: "qty",
  },
  {
    title: "Promotion",
    dataIndex: "promotion",
    key: "promotion",
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

const data: OrderType[] = [
  {
    orderId:"1",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
  },
  {
    orderId:"2",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
  },
  {
    orderId:"3",
    customerName: "John Brown",
    qty:4,
    products:[
      {
        productName:'mongo',
        unitPrice:3000
      }
    ],
    promotion: null,
    totalAmount: 1000,
    payment:'Cash',
    orderDate:'string',
    deliveryDate:null
  },
];

const CreateSaleInvoice = () => {
  const navigate = useNavigate()
    const [openModal,setOpenModal] = useState(false)
        
          const AddProduct = () =>{
            setOpenModal(true)
          }
        
          const handleOk = () => {
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
        navigate('/invoice')
      )
    }
  
    return (
      <div className="createContainer">
        <Title level={3} className="createText">Create Sale Invoice</Title>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8} className="gutter-row">
            <div>
              <Title level={5}>Enter Customer Name</Title>
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
            <div className="AddBtn">
                  <Button type="primary" className="btnAdd" onClick={AddProduct}> + Add Product</Button>
                  <Modal
                    open={openModal}
                    title="Filter User"
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
                      <Button key="add" variant='solid' color="green" onClick={handleOk} className="modalBtn">
                        Save
                      </Button>,
                    ]}
                  >
                    <InvoiceProduct />
                  </Modal>
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div className="scannerContainer">
              <img src="/images/barcode.png" alt="scan_photo" className="scanner"/>
            </div>
          </Col>
        </Row>
        <Table<OrderType> columns={columns} dataSource={data} rowKey={(record) => record.orderId} className="tableOrder"/>
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
          <Button type="primary" className="cancel1" onClick={CancelClick}>Create Invoice</Button>
        </div>
      </div>
    )
}

export default CreateSaleInvoice
