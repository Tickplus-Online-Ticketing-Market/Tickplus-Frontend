import React from 'react';
//import{ HiOutlineSearch} from 'react-icons/hi'
// import UserProfile from './UserProfile';
import UserProfileMenu from './UserProfileMenu';

function DashboardUser() {
  return (
      <div className='flex flex-col gap-4 '>

        < UserProfileMenu />
        {/* <div className='flex items-center justify-end w-full'>  */}
            {/* search bar */}
            {/* <HiOutlineSearch fontSize={20} className='text-orange-400 absolute top-1/2 -translate-y-1/2 left-3'/> */}
            {/* <input type="text" placeholder='search...' 
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-orange-600 rounded-lg pl-11 pr-4 " />
        </div>  */}
      </div>  
  )
}


export default DashboardUser