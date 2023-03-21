import React from 'react'

const ViewSale = () => {
    return (
        <div className='h-screen bg-gray-100 flex  justify-center items-center'>
            <div className= ' flex flex-col bg-white text-gray-700 w-[96%] h-[96%] shadow-lg rounded-md overflow-hidden  justify-evenly '>
                <div className=' flex  items-center mx-7  bg-white text-gray-700  h-[26%] shadow-lg  rounded-md overflow-hidden  ' >
                   <div className='ml-7 w-[30%] '>avatar</div> 
                   <div className=' w-[70%]'>information</div>

                </div>
                <div className=' mx-7 bg-white text-gray-700 h-[26%] shadow-lg  rounded-md overflow-hidden'>hello</div>
                <div className=' mx-7 bg-white text-gray-700  h-[26%] shadow-lg  rounded-md overflow-hidden'>hello</div>
           
            </div>

        </div>
    )
}

export default ViewSale
