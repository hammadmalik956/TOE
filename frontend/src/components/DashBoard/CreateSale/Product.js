import React from 'react'
import { Form, Input, Button } from "antd";
import InputField from '../../Generic/InputField';
import UploadPic from './UploadPic';

const Product = (props) => {
  return (
    
      <Form  onFinish={props.onFinish} initialValues={props.initialValues} >
        <div className='flex justify-between  items-center '>
          <div className='w-[50%] ' >
            <InputField name="pname" label="Name" placeholder="Product Name" width='60%' rules={[{
              required: true, message: 'Please Enter Product Name'
            }]} />
          </div>
          <UploadPic action="data:/" />
        </div>
        <InputField name="pcnic" label="CNIC" placeholder="Product CNIC" width='30%' rules={[{
          required: true, message: 'Please Enter Product CNIC'
        }]} />
        <InputField name="paddress" label="Address" placeholder="Product Address" width='30%' rules={[{
          required: true, message: 'Please Enter Product Address'
        }]} />
        <InputField name="pcontact" label="Contact" placeholder="Product Contact" width='20%' rules={[{
          required: true, message: 'Please Enter Product Contact'
        }]} />
        <Button type='primary' htmlType='submit'  >Continue</Button>
      </Form>
    
  )
}

export default Product

