import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function Layout() {
  return (
    <div className = 'flex flex-row bg-background h-screen w-screen overflow-auto'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Header />
          <div className= 'p-4 overflow-auto'>
            {<ToastContainer/>}
            {<Outlet />}
          </div>
        </div>  
    </div>
  )
}
