import React from "react";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";

export default function Layouts(){
    return(
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
            <div className="p-4">{<Outlet/>}</div>
            </div>
            
        </div>
    )
}