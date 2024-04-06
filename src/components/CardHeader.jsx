import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const CardHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center gap-2">
        <div className="bg-[#bdbdbd] w-12 aspect-square rounded-full text-2xl text-white flex justify-center items-center">
          V
        </div>
        <div className="flex flex-col">
          <p className="">Vikas Jassu</p>
          <p className="text-sm text-[#6C757D]">2 days ago</p>
        </div>
      </div>
      <div className="text-xl">
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};

export default CardHeader;
