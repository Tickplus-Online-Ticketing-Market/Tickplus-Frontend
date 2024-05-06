import React from "react";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function Layouts(){
    
    return(
        <div className="flex flex-row bg-background h-screen w-screen overflow-hidden">
            <Sidebar />
             <div className="flex-1 overflow-autoflex-1 h-screen w-4/5 overflow-auto">
                <Header />   
            <div className="p-4 overflow-hidden">{<Outlet/>}</div>
            </div>
            
        </div>
    )
}