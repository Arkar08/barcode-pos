/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Input, Row ,Typography} from 'antd';
import { AutoComplete} from 'antd';
import { useContext, useState } from 'react';
import { FindContext } from '../../context/FindContext';
import Axios from '../../api/ApiConfig';
import { OrderContext } from '../../context/OrderContext';


const {Title} = Typography;

const AddProduct2 = () => {

    const context = useContext(FindContext);
    const [stock,setStock] = useState({
      price:0,
      stockLevel:''
    })
    const [qty,setQty] = useState<number>()
    const context1 = useContext(OrderContext)
  
    if (!context) {
      throw new Error("findContext must be used within a orderProvider");
    }

    
    if (!context1) {
      throw new Error("orderContext must be used within a orderProvider");
    }

    const {productName} = context;
    const {setActiveQty ,activeQty,setOrderData} = context1;

      const getSearchValue = (inputValue:any, option:any)=>{
          return  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      const onSelect = async(value: string) => {
        setOrderData((prev:any) => {
          return {
            ...prev,
            productName: value
          }
        })
        const productName = {
          productName:value
        }
       if(value !== ''){
          await Axios.post("find/stock",productName).then((res)=>{
            if(res.data.status === 200){
              setStock(res.data.data[0])
            }
          }).catch((error)=>{
            console.log(error)
          })
       }
        if(value === ''){
          setStock({
            price:0,
            stockLevel:''
          
          })
        }
      };

      const changeQty = (value:any)=>{
        if(value > stock.stockLevel){
          setQty(value)
          setActiveQty(true)
        }else{
          const priceList = Number(stock.price * value) 
          setOrderData((prev:any) => {
            return {
              ...prev,
              qty: Number(value),
              price:priceList
            }
          })
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
            onChange={onSelect}
          />
          <Title level={5} className='qty'>Qty</Title>
          <Input placeholder="0" className="inputBox" type="number" disabled={stock.stockLevel=== ''} value={qty} onChange={(e)=>changeQty(e.target.value)}/>
          {
            activeQty && (<div>
              <Title level={5} className='qtyText'> *Stock is not enough.</Title>
            </div>)
          }
          <Title level={5} className='stock'>Stock - {stock.stockLevel === '' ? '0':stock?.stockLevel.split("",2)}</Title>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct2
