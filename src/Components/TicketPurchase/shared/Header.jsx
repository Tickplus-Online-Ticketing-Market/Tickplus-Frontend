import React from 'react'
import { FaUserCircle } from 'react-icons/fa'


export default function Header() {
  return (
    <div className="bg-secondary h-20 px-4 flex justify-between items-center">
      <div className="flex flex-col justify-around -space-y-1 ps-4">
        <h1 className="ml-[16rem] text-primary font-bold text-2xl">Ticket Purchasing Procedure</h1>

      </div>
      <div className="h-16 px-6 flex justify-between items-center gap-6">
        

        <div>
          <FaUserCircle fontSize={36} className=" text-primary cursor-pointer" />
          <span className=" sr-only">Your Profile</span>
        </div>
      </div>
    </div>
  )
}

