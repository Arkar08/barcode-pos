import { Col, Input, Row ,Typography} from 'antd';
import { AutoComplete} from 'antd';

  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];



const {Title} = Typography;

const AddProduct2 = () => {

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24} className="gutter-row">
          <Title level={5}>Product Name</Title>
          <AutoComplete
            className='completeBox'
            style={{ width: '100%' }}
            options={options}
            placeholder="Search Product Name"
            filterOption={(inputValue, option) =>
             option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <Title level={5}>Qty</Title>
          <Input placeholder="0" className="inputBox" type="number"/>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct2
