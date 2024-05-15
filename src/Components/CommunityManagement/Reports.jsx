import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import TransactionChart from "./TransactionChart";

export default function Reports() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8 w-full">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-accent">
            <IoMdPhotos className="text-2xl text-background" />
          </div>
          <div className="pl-6">
            <span className="text-xl text-text font-medium">Total posts</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-accent">
            <FaHeart className="text-2xl text-background" />
          </div>
          <div className="pl-6">
            <span className="text-xl text-text font-medium">Reactions</span>
          </div>
        </BoxWrapper>
      </div>
      <div><TransactionChart /></div>
      
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-secondary rounded-sm p-4 flex-1 boder boder-primary flex items-center">
      {children}
    </div>
  );
}
