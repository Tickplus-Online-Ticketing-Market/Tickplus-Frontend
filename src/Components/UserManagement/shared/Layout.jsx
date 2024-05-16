import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-auto">
      <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="p-4 overflow-auto">{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default layout;