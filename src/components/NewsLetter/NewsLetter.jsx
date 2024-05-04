import React from "react";

function NewsLetter() {
  return (
    <div className="w-[80%] h-[65vh] flex flex-col items-center justify-center m-auto py-0 px-36 mb-[150px] bg-gradient-to-t from-[#ffffff] to-purple-300 rounded ">
      <h1 className="text-[#454545] text-[55px] font-semibold ">Cet Exclusive Offers On Your Email </h1>
      <p className="text-[#454545] text-xl ">Subscribe to our new letter and stay updated</p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[70px] border  border-[#e3e3e3] border-solid mt-5">
        <input className="w-[500px] ml-7 border-none outline-none text-[#616161] font-semibold  " type="email" placeholder="Your Email id" />
        <button className="w-[200px] h-[70px] rounded-[80px] bg-black text-white font-semibold cursor-pointer">  subscribe </button>
      </div>
    </div>
  );
}

export default NewsLetter;
