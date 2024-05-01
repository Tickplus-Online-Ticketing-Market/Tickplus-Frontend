import React from 'react'
import { MdFreeCancellation } from "react-icons/md";

export default function Cancellations() {
  return (
    <div className='mb-2'>
      <div >
        <div className='bg-background h-[8rem] px-2 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><MdFreeCancellation/></div>
            <div className='text-primary text-4xl '>Cancellations</div>
          </div>

      </div>
    <div className='bg-accent px-1 py-1 rounded-lg'>
      
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date/Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
          <tbody>
            <tr className="bg-text">
              <th scope="row" className="px-6 py-4 font-xl text-background">
                  Event 01
              </th>
              <td className="px-6 py-4 text-background">
                  ############
              </td>
              <td className="px-6 py-4 text-background">
                  20:00 12/03/24
              </td>
              <td className="px-6 py-4 text-background">
                  Emergency Absence
              </td>
              <td className="px-6 py-4 text-background">
                  Complete
              </td>
            </tr>         
          </tbody>
        </table>
      </div>
      
    </div>
    </div>
  </div>
  )
}
