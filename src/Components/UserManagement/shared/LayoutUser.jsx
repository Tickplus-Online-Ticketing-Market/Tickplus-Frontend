import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderUser from './HeaderUser'
import SidebarUser from './SidebarUser'

function LayoutUser() {
  return (
    <div className="flex flex-row bg-background h-screen w-screen overflow-auto">
      <SidebarUser />
        <div className="flex flex-col flex-1">
           <HeaderUser /> 
          <div className="p-4 overflow-auto">{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default LayoutUser;