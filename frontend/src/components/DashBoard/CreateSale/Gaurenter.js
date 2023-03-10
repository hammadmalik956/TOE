import React from 'react'
import { Form, Input, Button } from "antd";
import InputField from '../../Generic/InputField';
import UploadPic from './UploadPic';

const Gaurenter = (props) => {
  return (
    
      <Form  onFinish={props.onFinish} initialValues={props.initialValues} className='p-10 mx-10 border-2  shadow-lg rounded-md'  >
        <div className='flex justify-between  items-center '>
          <div className='w-[50%] ' >
            <InputField name="bname" label="Name" placeholder="Gaurenter Name" width='60%' rules={[{
              required: true, message: 'Please Enter Gaurenter Name'
            }]} />
          </div>
          <UploadPic action="data:/" />
        </div>
        <InputField name="gcnic" label="CNIC" placeholder="Gaurenter CNIC" width='30%' rules={[{
          required: true, message: 'Please Enter Gaurenter CNIC'
        }]} />
        <InputField name="gaddress" label="Address" placeholder="Gaurenter Address" width='30%' rules={[{
          required: true, message: 'Please Enter Gaurenter Address'
        }]} />
        <InputField name="gcontact" label="Contact" placeholder="Gaurenter Contact" width='20%' rules={[{
          required: true, message: 'Please Enter Gaurenter Contact'
        }]} />
        <Button type='primary' htmlType='submit'  >Continue</Button>
      </Form>
    
  )
}

export default Gaurenter

