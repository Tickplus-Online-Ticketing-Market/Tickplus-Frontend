import React from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

export default function TableDraw({ tableData }) {
  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-gray-500">
        <thead className="bg-accent">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              State
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Role
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Team
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {tableData.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function TableRowDraw({ item }) {
  return (
    <tr class=" bg-secondary hover:bg-gray-50">
      <td class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div class="relative h-10 w-10">
          <img
            class="h-full w-full rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
        </div>
        <div class=" text-base">
          <div class="font-medium text-gray-700">{item.name}</div>
          <div class="text-gray-400">{item.info.slice(0, 30) + " ..."}</div>
        </div>
      </td>
      <td class="px-6 py-4">
        <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
          <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
          {item.name}
        </span>
      </td>
      <td class="px-6 py-4">{item.name}</td>
      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            {item.name}
          </span>
        </div>
      </td>
      <td class="px-6 py-4">
        <div className="flex justify-end gap-4 text-primary content-baseline">
          <a className="text-[1.55rem]" x-data="{ tooltip: 'View' }" href="#">
            {<FaEye />}
          </a>
          <a className="text-2xl" x-data="{ tooltip: 'Edit' }" href="#">
            {<MdEditSquare />}
          </a>
          <a className="text-[1.25rem]" x-data="{ tooltip: 'Delete' }" href="#">
            {<FaTrashAlt />}
          </a>
        </div>
      </td>
    </tr>
  );
}
