import React from 'react'
import classNames from 'classnames';
import image from './../../../Assets/SponsershipManagement/image.png'
import { HiOutlineLogout } from "react-icons/hi";
import {DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS} from '../navigation'
import { Link, useLocation } from 'react-router-dom';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-text hover:no-underline active:bg-primary rounded-sm text-xl'

export default function Sidebar() {

  return(
    <div className='bg-accent h-screen w-1/5 p-3 flex flex-col text-white'>
    <div className='flex items-center gap-2 px-1 py-3'>
      <img src={image} alt="" />
    </div>
    <div className='flex-1 py-8 flex flex-col gap-0.5'>
      {DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>
    <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-500'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item =>(
        <SidebarLink key={item.key} item={item} />
      ))}
      <div className={classNames('text-logout cursor-pointer',linkClasses)}>
        <span className='text-xl'><HiOutlineLogout /></span>
        Logout
    </div>
      </div>
  </div>
  );
}


function SidebarLink({ item }) {
  const{ pathname } = useLocation()

  return(
    <Link to={item.path} className={classNames(pathname === item.path ? 'text-primary' : 'text-secondary',linkClasses)}>
       <span className='text-xl'>{item.icon}</span>
       {item.label}
    </Link>
  )
  
}
