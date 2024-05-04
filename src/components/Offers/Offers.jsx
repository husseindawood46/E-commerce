import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
export default function Offers() {
  return (
    <div className=" w-[80%] h-[75vh] flex m-auto px-[140px]  py-0 mb-[150px] bg-gradient-to-t from-[#ffffff] to-purple-300 mt-56 rounded ">
      <div className="flex-1 flex flex-col justify-center ">
        <h1 className=" text-[#171717]  text-[50px] font-semibold ">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[50px]  font-semibold ">
          Offers for you
        </h1>
        <p className="text-[#171717] text-[20px] font-semibold">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[250px] h-[50px] rounded-[35px] bg-[#ff4141] border-none   text-white text-[22px] font-bold mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-[50px] p-2 ml-11">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
