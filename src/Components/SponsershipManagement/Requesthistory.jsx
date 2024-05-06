import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";



import { RQ_HISTORY_SAMPLE_DATA } from "./RqHistoryData";
import Barcharts from "./Barcharts";

export default function Requesthistory({ recentOrderData }) {


  
  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <div>
      <table className="w-full border-collaps text-left">
        <thead className="bg-accent text-2xl">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Event
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Venue
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Date
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Artists
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Attendees
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {RQ_HISTORY_SAMPLE_DATA.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-center text-3xl text-primary font-bold mt-20"> 
        Here you can find out about events that you interested in
      </div>
       
      <Barcharts />

      </div>
    </div>

    
  );
}
function TableRowDraw({ item }) {
  return (
    <tr class=" bg-tbg hover:bg-secondary">
      <td class="px-6 py-4">
      <div >
            <div className="font-bold text-2xl text-black">{item.ename}</div>
            <div className="text-black">{item.eid}</div>
          </div>
      </td>

      <td class="px-6 py-4">{item.venue}</td>

      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.date}
          </span>
        </div>
      </td>

      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.artists}
          </span>
        </div>
      </td>

      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.attendees}
          </span>
        </div>
      </td>

      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 px-2 py-1 text-xl font-semibold text-black">
            {item.status}
          </span>
        </div>
      </td>


      <td class="px-6 py-4">
        <div className="flex justify-end gap-4 text-primary content-baseline">
      
          <button className="text-2xl" x-data="{ tooltip: 'Edit' }" >
            {<MdEditSquare />}
          </button>
          <button className="text-[1.25rem]" x-data="{ tooltip: 'Delete' }">
            {<FaTrashAlt />}
          </button>
        </div>
      </td>

    </tr>

  );
}

