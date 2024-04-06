import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
const CardFooter = () => {
  return (
    <>
      <div className="w-full h-[2px] bg-[#dedede]"></div>
      <div className="grid grid-cols-[25%_50%_25%] text-[#808080] text-[15px] mt-3">
        <div className="flex items-center justify-center gap-1 border-r-2 cursor-pointer">
          <p>
            <AiOutlineLike />
          </p>
          <p>Like</p>
        </div>
        <div className="flex items-center justify-center gap-1 cursor-pointer">
          <p>
            <FaRegCommentAlt />
          </p>
          <p>Comment</p>
        </div>
        <div className="flex items-center justify-center gap-1 border-l-2 cursor-pointer">
          <p>
            <MdOutlineMessage />
          </p>
          <p>Message</p>
        </div>
      </div>
    </>
  );
};

export default CardFooter;
