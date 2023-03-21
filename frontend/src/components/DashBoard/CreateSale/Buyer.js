import React from 'react'
import { Form, Button } from "antd";
import InputField from '../../Generic/InputField';
import UploadPic from './UploadPic';


const Buyer = (props) => {

  return (

    <Form onFinish={props.onFinish} initialValues={props.initialValues} >
      <div className='flex justify-between  items-center '>
        <div className='w-[50%] ' >
          <InputField name="bname" label="Name" placeholder="Buyer Name" width='60%' rules={[{
            required: true, message: 'Please Enter Buyer Name'
          }]} />
        </div>
        <div className='flex'>
          <UploadPic action="http://localhost:4000/api/image/upload" />
         
          </div>

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

