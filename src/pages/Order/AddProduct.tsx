import { Button, Col, Row ,Typography} from 'antd';
import { AutoComplete,Space,Table } from 'antd';
import { OrderType } from "../../utils/Type";
import type { TableProps } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';


  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

  const editStyle:React.CSSProperties = {
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
            <DeleteOutlined style={editStyle} />
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
  

const {Title} = Typography;

const AddProduct2 = () => {

  const [showTable , setShowTable] = useState(false)

  const addProductList = () =>{
    setShowTable(true)
  }

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24} className="gutter-row">
          <div>
            <Title level={5}>Product Name</Title>
            <div className='completeContainer'>
              <AutoComplete
                className='completeBox'
                style={{ width: '100%' }}
                options={options}
                placeholder="Search Product Name"
                filterOption={(inputValue, option) =>
                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <Button type='primary' className="btnAdd" onClick={addProductList}>Add</Button>
            </div>
          </div>
        </Col>
      </Row>
      {
        showTable && (
          <Table<OrderType> columns={columns} dataSource={data} rowKey={(record) => record.orderId} className="tableAddOrder"/>
        )
      }
    </div>
  )
}

export default AddProduct2
