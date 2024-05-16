import React from 'react'
// import {Link} from 'react-router-dom'
import UserTable from './UserTable';


function Organizers() {
  return (
    <div className='flex flex-col gap-4 '> 

        <div className='flex items-center justify-end w-full'> 
            {/* search bar */}
            {/* <HiOutlineSearch fontSize={20} className='text-orange-400 absolute top-1/2 -translate-y-1/2 left-3'/> */}
            <input type="text" placeholder='search...' 
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-orange-600 rounded-lg pl-11 pr-4 " />
        </div> 

    {/* import user table details to the dashboard  */}
    <UserTable /> 
    </div>
  )
}

export default Organizers;