import React from 'react'
import { Form, Input, Button } from "antd";
import InputField from '../../Generic/InputField';
import UploadPic from './UploadPic';

const Buyer = (props) => {
  
  return (

      <Form   onFinish={props.onFinish} initialValues={props.initialValues} className='p-10 mx-10 border-2  shadow-lg rounded-md'  >
        <div className='flex justify-between  items-center '>
          <div className='w-[50%] ' >
            <InputField name="bname" label="Name" placeholder="Buyer Name" width='60%' rules={[{
              required: true, message: 'Please Enter Buyer Name'
            }]} />
          </div>
          <UploadPic action="data:/" />
        </div>
        <InputField name="bcnic" label="CNIC" placeholder="Buyer CNIC" width='30%' rules={[{
          required: true, message: 'Please Enter Buyer CNIC'
        }]} />
        <InputField name="baddress" label="Address" placeholder="Buyer Address" width='30%' rules={[{
          required: true, message: 'Please Enter Buyer Address'
        }]} />
        <InputField name="bcontact" label="Contact" placeholder="Buyer Contact" width='20%' rules={[{
          required: true, message: 'Please Enter Buyer Contact'
        }]} />
        <Button type='primary' htmlType='submit'  >Continue</Button>
      </Form>
    
  )
}

export default Buyer

