/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Input, Row ,Typography} from 'antd';
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
    const context1 = useContext(OrderContext)
  
    if (!context) {
      throw new Error("findContext must be used within a orderProvider");
    }

    
    if (!context1) {
      throw new Error("orderContext must be used within a orderProvider");
    }

    const {productName} = context;
    const {setActiveQty ,activeQty,setOrderData,orderData} = context1;
      
      const onSelect = async(value:any) => {
        setOrderData((prev:any) => {
          return {
            ...prev,
            productName: value
          }
        })
        const productName = {
          productName:value
        }
       if(value !== '' || orderData.productName !== ''){
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
          if(Number(value) > Number(stock.stockLevel)){
            setActiveQty(true)
            setOrderData((prev:any)=>{
              return {
                ...prev,qty:Number(value)
              }
            })
          }else{
            const priceList = Number(stock.price * value) 
            setOrderData((prev:any) => {
              return {
                ...prev,
                qty: Number(value),
                price:priceList,
                id:Math.floor(Math.random() * 1000)
              }
            })
            setActiveQty(false)
          }
      }

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24} className="gutter-row">
          <Title level={5}>Product Name</Title>
          <select value={orderData.productName} onChange={(event)=>onSelect(event.target.value)} className='completeBox' style={{ width: '100%' }}>
            <option value="">Choose Product Name</option>
            {
              productName.map((product:any)=>{
                return (
                  <option value={product.value} key={product.id}>{product.value}</option>
                )
              })
            }
          </select>
          <Title level={5} className='qty'>Qty</Title>
          <Input placeholder="0" className="inputBox" type="number" disabled={stock.stockLevel=== ''} value={orderData.qty} onChange={(e)=>changeQty(e.target.value)}/>
          {
            activeQty && (<div>
              <Title level={5} className='qtyText'> *Stock is not enough.</Title>
            </div>)
          }
          <Title level={5} className='stock'>Stock - {orderData.productName === '' ? '0':stock.stockLevel.split("",2)}</Title>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct2
