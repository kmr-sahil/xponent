// components/NotificationCard.jsx
import React from "react";
import Image from "next/image";

const Reminder = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-600/10 p-3 sm:p-4 font-sans rounded-[2.5rem] max-w-[16rem] sm:max-w-[24rem] mx-auto border-1 border-zinc-600/2">
      <div className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[1.5rem] bg-white border-2 border-zinc-50 px-4 py-7  sm:px-10 sm:py-12 rounded-4xl overflow-hidden shadow-xl">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <div className=" flex items-center gap-1 ">
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-9 h-9 rounded-full border-2 border-white shadow-lg -rotate-3"
              alt=""
            />
            <h1 className="text-[1rem] sm:text-[1.5rem] font-bold text-zinc-700 whitespace-nowrap">
              Lisa Jones{" "}
            </h1>
          </div>
          <h1 className="text-[1rem] sm:text-[1.5rem] font-bold text-zinc-300 whitespace-nowrap -mt-[0.35rem]">
            is going to join you for:
          </h1>
          <div className="flex items-center gap-1 -mt-[0.35rem]">
            <h1 className="text-[1rem] sm:text-[1.5rem] font-bold text-zinc-700 whitespace-nowrap">
              Yoga: Sunset Class
            </h1>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-10 h-9 rounded-md border-2 border-white shadow-lg rotate-12"
              alt=""
            />
          </div>
        </div>

        <div className="w-[4rem] h-[1px] bg-zinc-200/80"></div>

        <h2 className="text-[0.85rem] sm:text-[1.15rem] font-medium text-zinc-300 text-center leading-tight">
          Sun Jun 21 <br></br> 8:00pm - 9:00pm <br></br> Brooklyn Studio
        </h2>
      </div>
    </div>
  );
};

export default Reminder;
