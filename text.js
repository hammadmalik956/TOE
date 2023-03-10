function SideNavbar() {
	return (
	  <div>
		<Disclosure as="nav">
		 
		  <div className="p-6 w-1/4 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
			<div className="flex flex-col justify-start item-center">
			  <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
				Virtual Dashboard
			  </h1>
			  <div className=" my-4 border-b border-gray-100 pb-4">
				<div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Dashboard
				  </h3>
				</div>
				<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Profile
				  </h3>
				</div>
				<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Comments
				  </h3>
				</div>
				<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Analytics
				  </h3>
				</div>
				<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Messages
				  </h3>
				</div>
				<div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
				  <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
				  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
					Integration
				  </h3>
				</div>
			  </div>
			 
			</div>
		  </div>
		</Disclosure>
	  </div>
	);
  }
  
  export default SideNavbar;


  <div className='flex flex-1 flex-col gap-y-4 pt-10  '>
  <a className='flex mb-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


	  <DashboardCustomizeRoundedIcon className='text-2xl text-gray-600 group-hover:text-white' />
	  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Dashboard</h1>
  </a>

  <a className='flex mb-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


	  <AddIcon className='text-2xl text-gray-600 group-hover:text-white' />
	  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Create Sale</h1>
  </a>
  {/* Creating Drop Downlist  */}
  <ul id="dropdown-example" className="    border-l-2 border-gray-600  ml-12 ">
	  <li>
		  <a className='flex justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


			  <PersonAddIcon className='text-2xl text-gray-600 group-hover:text-white' />
			  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Buyer Information </h1>
		  </a>
	  </li>
	  <li>
		  <a className='flex  justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


			  <SupervisedUserCircleIcon className='text-2xl text-gray-600 group-hover:text-white' />
			  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Gaurenter Information</h1>
		  </a>
	  </li>
	  <li>
		  <a className='flex  justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


			  <AddShoppingCartIcon className='text-2xl text-gray-600 group-hover:text-white' />
			  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Product Information </h1>
		  </a>
	  </li>
	  <li>
		  <a className='flex mb-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg ' href='#'>


			  <ReceiptIcon className='text-2xl text-gray-600 group-hover:text-white' />
			  <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Invoice Information</h1>
		  </a>
	  </li>


  </ul>


  <a className='flex mb-2 justify-start items-center  py-2 px-3 text-white hover:bg-gray-900  rounded-md   hover:shadow-lg  ' href='#'>


	  <QueryStatsIcon className='text-2xl text-gray-600 group-hover:text-white' />
	  <h3 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>View Sale</h3>
  </a>


</div>

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const App: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default App;