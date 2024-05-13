import React from "react";
import Barcharts from "./Barcharts";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom"; //Import use navigate
import Piecharts from "./Piecharts";


export default function Dashboard(){
    const navigate = useNavigate(); // Initialize the navigate function

    //Function to handle button click
    const handleCreateTicketsclick = () => {
        navigate('CreateTickets');
    }
    return(
        <div className="h-screen">
            <div className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track h-[33rem] overflow-y-scroll'>
            <div className="text-boxf pb-3 pl-4 text-4xl font-bold"> All your work in details...</div>
            <div className="flex felx-row gap-4 w-full">
            <Barcharts />
            <Piecharts />
            </div>
            
            <div className="flex justify-center font-bold pt-8 px-56 text-4xl text-boxf">
                <p>We provide all the tools you need...</p>
            </div>
            <div className="flex justify-center font-bold pt-5 text-2xl text-text1 ">Hurry up! Get start with creating your own ticket with the most trusted</div>
            <div className="flex justify-center font-bold pt-2 pb-8 text-2xl text-text1">online ticketing platform worldwide.</div>
            <div className="flex justify-center">
            <button className="flex bg-boxf font-bold shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300 
             border border-txbx text-background rounded-full gap-2 px-4 py-2 text-xl "
            onClick={handleCreateTicketsclick}>
                <span className="text-3xl">
                    <HiOutlineFolderAdd />
                </span>
                Create Tickets 
            </button>
            </div>
            </div>
        </div>
    )
}