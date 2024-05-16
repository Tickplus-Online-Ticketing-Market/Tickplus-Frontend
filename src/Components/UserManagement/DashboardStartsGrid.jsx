import React from 'react'
import { IoCamera, IoHeadset, IoVideocam, IoWalk } from "react-icons/io5";


// add dashboard upper design
function DashboardStartsGrid() {
  return (
    <div className='flex gap-4 w-full'>
       <BoxWrapper>
          <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
              <IoHeadset className='text-2xl text-white'/>
          </div>
          <div className='pl-4 '>
              <span className='text-sm text-gray-500 font-light'>Musicians</span>
          </div>
       </BoxWrapper>

       <BoxWrapper>
       <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
              <IoVideocam className='text-2xl text-white'/>
          </div>
          <div className='pl-4 '>
              <span className='text-sm text-gray-500 font-light'>Actors</span>
          </div>  
       </BoxWrapper>

       <BoxWrapper>
       <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
              <IoWalk className='text-2xl text-white'/>
          </div>
          <div className='pl-4 '>
              <span className='text-sm text-gray-500 font-light'>Dancers</span>
          </div>
       </BoxWrapper>

       <BoxWrapper>
       <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
              <IoCamera className='text-2xl text-white'/>
          </div>
          <div className='pl-4 '>
              <span className='text-sm text-gray-500 font-light'>Photographers</span>
          </div>
       </BoxWrapper>
    </div>
  )
}

export default DashboardStartsGrid

function BoxWrapper({children}) {
  return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}