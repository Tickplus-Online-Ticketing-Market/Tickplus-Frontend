import React from 'react';
import image from './image.png';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {DASHBOARD_SIDEBAR_BOTTOM_LINKS} from '../navigation'
import {DASHBOARD_SIDEBAR_LINKS} from '../navigation'
import { HiOutlineLogout } from 'react-icons/hi';
const Linkclasses ='flex items-center gap-2 font-light px-3 py-2 hover:bg-box hover:no-underline active:bg-boxclick rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className="bg-accent text-text w-60  p-3 flex flex-col">
        <div className="flex items-center gap-2 px-1 py-3">
        <img src={image} alt='description'/>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
            <div className={classNames('text-log cursor-pointer', Linkclasses)}>
                
                <span className="text-xl">
                    <HiOutlineLogout />
                </span>
                Log out
            </div>
        </div>
    </div>
  )
}

function SidebarLink({item}){
    const { pathname } = useLocation()

    return(
        <Link to={item.path} className={classNames (pathname === item.path ? 'text-boxf' : 'text-text', Linkclasses)}>
        <span className="text-xl">{item.icon}</span>
        {item.label}
        </Link>
    )
}
