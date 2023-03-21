import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
const image = require('../../../img/even.jpg')

const SaleCard = (props) => {

   
    return (
        <div className='h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
                <img src={image} alt='SalePic' className='w-full h-full object-cover' ></img>

                <div className=' ml-4 my-2  flex gap-1 items-center  flex-wrap  font-semibold overflow-ellipsis  overflow-hidden ' >
                    <h1>Buyer Name:</h1><span>{props.bname}</span>
                    <h1>Buyer CNIC:</h1><span>{props.bcnic}</span>
                    <h1>Date Of Purchase:</h1><span>{props.pdate}</span>
                   
                </div>

                <div className='flex items-center p-2 justify-between'>
                    <a className='flex  justify-start items-center  py-2 px-2 shadow-lg text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg ' >


                        <VisibilityIcon className='text-2xl text-gray-600 group-hover:text-white' />
                        <h1 className=' mx-1 text-base text-gray-800 group-hover:text-white font-semibold'>View Sale</h1>
                    </a>
                    <a className='flex  justify-start items-center shadow-lg py-2 px-2 text-white hover:bg-gray-900  rounded-md group  hover:shadow-lg ' >


                        <EditIcon className='text-2xl text-gray-600 group-hover:text-white' />
                        <h1 className=' mx-2 text-base text-gray-800 group-hover:text-white font-semibold'>Edit Sale</h1>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default SaleCard
