import { Col, Row } from 'antd';
import {Typography } from "antd"
import { Select } from 'antd';

const {Title} = Typography;

const FilterSupplier = () => {

    const handleChange = ((value:string)=>{
        console.log(value)
    })

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12} className="gutter-row">
            <div>
                <Title level={5}>Select Supplier Name</Title>
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
        <Col span={12} className="gutter-row">
            <div>
                <Title level={5}>Select Company Name</Title>
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
        <Col span={12} className="gutter-row">
            <div>
                <Title level={5}>Select State</Title>
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
        <Col span={12} className="gutter-row">
            <div>
                <Title level={5}>Select Township</Title>
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
  )
}

export default FilterSupplier
