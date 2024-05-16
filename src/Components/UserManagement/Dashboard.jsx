import React from 'react';
import DashboardStartsGrid from './DashboardStartsGrid'
import UserTable from './UserTable';
import { Link } from 'react-router-dom';
//import{ HiOutlineSearch} from 'react-icons/hi'

function Dashboard() {
  return (
      <div className='flex flex-col gap-4 '>
        <div className='flex items-center justify-end w-full'> 
            {/* search bar */}
            {/* <HiOutlineSearch fontSize={20} className='text-orange-400 absolute top-1/2 -translate-y-1/2 left-3'/> */}
            <input type="text" placeholder='search...' 
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-orange-600 rounded-lg pl-11 pr-4 " />
        </div> 
        {/* import dashboardupper design to the dashboard page */}
        <DashboardStartsGrid />   
        {/* import user table details to the dashboard  */}
        <UserTable /> 

        <Link to='DashboardUser' className='underline'> dashbord user</Link>
      </div>  
  )
}

export default Dashboard