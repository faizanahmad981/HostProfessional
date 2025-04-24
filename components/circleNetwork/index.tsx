import { avator1,avator2 } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { FaWifi } from "react-icons/fa";

const users = [
    { id: 1, top: "0%", left: "45%", image:avator1 },
    { id: 2, top: "25%", right: "20%", image: avator2 },
    { id: 3, bottom: "15%", left: "45%", image: avator1 },
    { id: 4, top: "35%", left: "15%", image: avator2 },
    { id: 5, top: "5%", right: "5%", image: avator1 },
    { id: 6, top: "5%", left: "5%", image: avator2 },
    { id: 7, bottom: "10%", right: "10%", image: avator1 },
    { id: 8, bottom: "5%", left: "10%", image: avator2 },
  ];
  

const CircleNetwork: React.FC = () => {
  return (
    <div className="relative w-full max-w-[660px] h-[479px] border-[2px] border-[#FAC800] rounded-[20.08px] bg-gradient-to-b from-white to-rose-50  overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[90%] h-[90%] rounded-full border border-dashed border-gray-300" />
        <div className="absolute w-[60%] h-[60%] rounded-full border border-dashed border-gray-300" />
        <div className="absolute w-[30%] h-[30%] rounded-full border border-dashed border-gray-300" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full text-yellow-400 z-10">
        <div className="flex flex-col items-center space-y-1">
          <FaWifi className="text-2xl" />
          <FaWifi className="text-3xl" />
        </div>
      </div>

      {/* User avatars */}
      {users.map((user) => (
        <div
          key={user.id}
          className="absolute flex items-center justify-center"
          style={{ ...user }}
        >
          <div className="relative w-20 h-20">
  
          
            <Image  src={user.image} alt={`User ${user.id}`} className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" />

            {/* Green online status */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />

            {/* Number badge (top-left) */}
            <span className="absolute -top-2 -left-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white font-bold text-xs rounded-full shadow">
              {user.id}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircleNetwork;
