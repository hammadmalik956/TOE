import React from 'react'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import AddIcon from '@mui/icons-material/Add';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
const SideBar = () => {
    return (
        <div className="flex h-screen bg-blue-50 font-sans text-gray-900">
            <aside className=" flex h-screen w-64 flex-col items-center border-r border-blue-50  bg-purple-50 ml-2 rounded   ">

                <div className="flex h-18 w-full items-center justify-center border-b border-blue-50 ">

                </div>
                <nav className='flex flex-1 flex-col gap-y-4 pt-10'>
                    <a className='flex flex-row items-center rounded py-2 px-3 bg-onyx-100 text-white hover:bg-onyx-50 ' href='#'>


                        <DashboardCustomizeRoundedIcon className='h-6 w-6 stroke-current' />
                        <h1 className='mx-2 text-white font-semibold'>Dashboard</h1>
                    </a>

                    <a className="flex flex-row items-center rounded py-2 px-3  text-white  hover:bg-onyx-50  " href='#'>


                        <AddIcon className='h-6 w-6 stroke-current' />
                        <h1 className='mx-2 text-white font-semibold hover:text-black'>Create Sale</h1>
                    </a>
                    {/* Creating Drop Downlist  */}
                    <ul id="dropdown-example" className="  border-l border-blue-50  ml-12 ">
                        <li>
                            <a className="flex flex-row items-center rounded py-1 px-3  text-white  hover:bg-onyx-50  " href='#'>


                                <PersonAddIcon className='h-6 w-6 stroke-current' />
                                <h1 className='mx-2 text-white font-semibold hover:text-black'>Buyer Info</h1>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row items-center rounded py-1 px-3  text-white  hover:bg-onyx-50  " href='#'>


                                <SupervisedUserCircleIcon className='h-6 w-6 stroke-current' />
                                <h1 className='mx-2 text-white font-semibold hover:text-black'>Gaurenter Info</h1>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row items-center rounded py-1 px-3  text-white  hover:bg-onyx-50  " href='#'>


                                <AddShoppingCartIcon className='h-6 w-6 stroke-current' />
                                <h1 className='mx-2 text-white font-semibold hover:text-black'>Product Info</h1>
                            </a>
                        </li>
                        <li>
                            <a className="flex flex-row items-center rounded py-1 px-3  text-white  hover:bg-onyx-50  " href='#'>


                                <ReceiptIcon className='h-6 w-6 stroke-current' />
                                <h1 className='mx-2 text-white font-semibold hover:text-black'>Invoice Info</h1>
                            </a>
                        </li>


                    </ul>


                    <a className='flex flex-row items-center rounded py-2 px-3  text-white  hover:bg-onyx-50 ' href='#'>


                        <QueryStatsIcon className='h-6 w-6 stroke-current' />
                        <h1 className='mx-2 text-white font-semibold '>View Sale</h1>
                    </a>


                </nav>



            </aside>
        </div>
    )
}

export default SideBar