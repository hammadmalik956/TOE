import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Divider, Steps } from "antd";
import Buyer from './Buyer';
import Gaurenter from './Gaurenter';
import Product from './Product';




const { Step } = Steps;
const MultiForm = () => {
  const [current, setCurrent] = useState(0);
  const [buyerDetails, setBuyerDetails] = useState(null);
  const [gaurenterDetails, setGaurenterDetails] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const onFinishBuyerForm = (values) => {
    setBuyerDetails(values);
    setCurrent(1)
  }
  const onFinishGaurenterForm = (values) => {
    setGaurenterDetails(values);
    setCurrent(2)

  }
  const onFinishProductForm = (values) => {
    setProductDetails(values);
    setCurrent(3)
  }

  const forms = [
    <Buyer onFinish={onFinishBuyerForm} initialValues={buyerDetails} />,
    <Gaurenter onFinish={onFinishGaurenterForm} initialValues={gaurenterDetails} />,
    <Product onFinish={onFinishProductForm} initialValues={productDetails} />
  ] 

  // not allowing to go through later forms by clicking in steper 
  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false
      console.log("HI")
    }
    if (stepNumber === 1) {
      return buyerDetails === null
    }
    if (stepNumber === 2) {
      return buyerDetails === null || gaurenterDetails === null
    }
    if (stepNumber === 3) {
      return buyerDetails === null || gaurenterDetails === null || productDetails === null
    }
  }
    isStepDisabled(0);
  return (

    <>
      <div>

        <Steps labelPlacement='vertical' onChange={setCurrent} current={current} >
          
          <Step disabled={isStepDisabled(0)} title="Buyer Information" icon={<PersonAddIcon />} ></Step>
          <Step disabled={isStepDisabled(1)} title="Gaurenter Information" icon={<SupervisedUserCircleIcon />} ></Step>
          <Step disabled={isStepDisabled(2)} title="Product Information" icon={<AddShoppingCartIcon />}></Step>
          <Step disabled={isStepDisabled(3)} title="Invoice Information" icon={<ReceiptIcon />} ></Step>
        </Steps>
        <Divider />

      </div>
      <div className=''>
        {forms[current]}
          
      </div>


    </>
  )
}

export default MultiForm
