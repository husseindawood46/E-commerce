import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_imag from "../Assets/hero_image.png";
export default function Hero() {
  return (
    <div className="h-[100vh] bg-gradient-to-t from-[#fde1ff] to-purple-300 flex">
      <div className="flex-1 flex flex-col justify-center gap-5  pl-44 leading-tight ">
        <h2 className="text-[#090909] text-3xl font-semibold ">
          NEW ARRIVALS ONL
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-7xl font-bold  ">new</p>
            <img className="w-[105px]" src={hand_icon} alt="" />
          </div>
          <p className="text-[#171717] text-7xl font-bold ">Collection</p>
          <p className="text-[#171717] text-7xl font-bold  "> For everyone</p>
        </div>
        <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[70px] mt-7 bg-[#ff4141] text-white text-lg font-medium ">
          <div>Last Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center m-11">
        <img src={hero_imag} alt="" />
      </div>
    </div>
  );
}
