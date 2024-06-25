import React from 'react';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../../Components/TicketPurchase/lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-text hover:no-underline active:bg-primary rounded-xl text-xl'

const Layout = () => {
  return (
    <div className='overflow-hidden h-screen flex flex-col bg-accent w-[15rem] p-7 text-text text-bold'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <img src="./images/tick+1.png" alt=""/>
      </div>

      <div className='flex-1 py-5 flex flex-col text-white'>
        {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
          <SidebarLink key={item.key} item={item}/>      
        ))}
      </div>

      <div className='flex-1'></div>

      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
        <SidebarLink key={item.key} item={item}/>      
      ))}   
    </div>
  )
}

export default function Sidebar() {
  return (
    <Layout />
  )
}

function SidebarLink({item}){
  const { pathname } = useLocation()

  return(
    <Link to={item.path} className={classNames (pathname===item.path ? 'text-primary' : 'text-secondary',linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}
