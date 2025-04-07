import { Col, Input, Row ,Typography} from 'antd';
import { AutoComplete} from 'antd';
import { useContext, useState } from 'react';
import { FindContext } from '../../context/FindContext';
import Axios from '../../api/ApiConfig';
import { OrderContext } from '../../context/OrderContext';


const {Title} = Typography;

const AddProduct2 = () => {

    const context = useContext(FindContext);
    const [stock,setStock] = useState<string>('')
    const [qty,setQty] = useState<number>()
    const [productValue,setProductValue] = useState('')
    const context1 = useContext(OrderContext)
  
    if (!context) {
      throw new Error("findContext must be used within a orderProvider");
    }

    
    if (!context1) {
      throw new Error("orderContext must be used within a orderProvider");
    }

    const {productName} = context;
    const {setActiveQty ,activeQty} = context1;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const getSearchValue = (inputValue:any, option:any)=>{
          return  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      const onSelect = async(value: string) => {
        setProductValue(value)
        const productName = {
          productName:value
        }
       if(value !== ''){
          await Axios.post("find/stock",productName).then((res)=>{
            if(res.data.status === 200){
              setStock(res.data.data[0].stockLevel)
            }
          }).catch((error)=>{
            console.log(error)
          })
       }
        if(value === ''){
          setStock('')
        }
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const changeQty = (value:any)=>{
        if(value > stock){
          setQty(value)
          setActiveQty(true)
        }else{
          setActiveQty(false)
          setQty(value)
        }
      }

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24} className="gutter-row">
          <Title level={5}>Product Name</Title>
          <AutoComplete
            className='completeBox'
            style={{ width: '100%' }}
            options={productName}
            placeholder="Search Product Name"
            filterOption={getSearchValue}
            value={productValue}
            onChange={onSelect}
          />
          <Title level={5} className='qty'>Qty</Title>
          <Input placeholder="0" className="inputBox" type="number" disabled={stock=== ''} value={qty} onChange={(e)=>changeQty(e.target.value)}/>
          {
            activeQty && (<div>
              <Title level={5} className='qtyText'> *Stock is not enough.</Title>
            </div>)
          }
          <Title level={5} className='stock'>Stock - {stock === '' ? '0':stock.split("",2)}</Title>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct2
