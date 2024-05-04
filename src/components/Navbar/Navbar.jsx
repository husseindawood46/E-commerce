import React, { useContext, useState } from "react";
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const{getTotalCartItems}=useContext(ShopContext)
  return (
    
    <div
      className="flex justify-around  p-[16px] shadow-lg shadow-black-500/40 drop-shadow-sm
     "
    >
      <div className="flex  items-center gap-5">
        <img src={Logo} alt="" />
        <p className="text-[#171717] text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul
        className="flex items-center list-none
       gap-12 text-[#626262] text-xl  font-medium "
      >
       <li
          onClick={() => {
            setMenu("shop");
          }}
          className="flex  flex-col  items-center justify-center gap-[3px] cursor-pointer "
        >
        <Link to='/'>Shop</Link>  
          {menu === "shop" ? (
            <hr
              className="w-[80%] border-none h-[3px] rounded-[10px]
          bg-[#ff4141]"
            />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
          className="flex  flex-col  items-center justify-center gap-[3px] cursor-pointer "
        >
          <Link to="/mens">Men</Link>
          {menu === "mens" ? (
            <hr
              className="w-[80%] border-none h-[3px] rounded-[10px]
          bg-[#ff4141]"
            />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("womans");
          }}
          className="flex  flex-col  items-center justify-center gap-[3px]  cursor-pointer"
        >
          <Link to="/womans">Woman</Link>
          {menu === "womans" ? (
            <hr
              className="w-[80%] border-none h-[3px] rounded-[10px]
          bg-[#ff4141]"
            />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="flex  flex-col  items-center justify-center gap-[3px] cursor-pointer "
        >
          <Link to="/Kids">Kids</Link>
          {menu === "kids" ? (
            <hr
              className="w-[80%] border-none h-[3px] rounded-[10px]
          bg-[#ff4141]"
            />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-11">
       <Link to='/login'> <button
          className="w-[157px] h-[58px] outline-none border 
         border-gray-400 rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer  active:bg-[#f3f3f3] "
        >
          Login
        </button></Link>
        <Link to="/card"><img src={cart_icon} alt="" /></Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-xl text-sm bg-red-600 text-white ">
         {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}
