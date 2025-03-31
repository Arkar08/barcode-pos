import { Button, Typography } from "antd"
import { Col, Row,Table,Space } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { OrderType } from "../../utils/Type";
import type { TableProps } from "antd";
import { EditOutlined } from "@ant-design/icons";

const {Title} = Typography;

const editStyle:React.CSSProperties = {
  color:'blue',
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
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = ((value:any)=>{
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
                  <Button type="primary" className="btnAdd"> + Add Product</Button>
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div className="scannerContainer">
              <img src="/images/scanner.png" alt="scan_photo" className="scanner"/>
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
          <Button variant="solid" danger className="cancel" onClick={CancelClick}>Cancel</Button>
          <Button type="primary" className="cancel1" onClick={CancelClick}>Create Invoice</Button>
        </div>
      </div>
    )
}

export default CreateSaleInvoice
