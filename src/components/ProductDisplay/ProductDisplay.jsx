import React, { useContext } from "react";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const{addToCart}=useContext(ShopContext)
  return (
    <div className="flex my-0 mx-[170px]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 ">
          <img className="h-[136px] " src={product.image} alt="" />
          <img className="h-[136px] " src={product.image} alt="" />
          <img  className="h-[136px] "src={product.image} alt="" />
          <img  className="h-[136px] "src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img
            className="w-[586px] h-[600px]"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="my-0 mx-[70px] flex flex-col ">
        <h1 className="text-[#3d3d3d] text-4xl font-bold ">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-1 text-[#1c1c1c] text-sm ">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-10 mx-0 gap-7 text-base  font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141] ">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-description">
            A lightweight, usually knitted,pullover shirt ,close-fitting and whit a round neckline and short sleeves, worn as an undershirt or outer garment. 
        </div>
        <div className="">
          <h1 className="mt-[55px] text-[#656565] text-base font-semibold ">Select Size</h1>
          <div className="flex my-[30px] mx-0 gap-5">
            <div className="py-[18px] px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer">S</div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer">M</div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer">L</div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer">XL</div>
            <div className="py-[18px] px-6 bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded cursor-pointer">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="py-5 px-10 w-[200px] text-[16px] font-semibold  text-white bg-[#ff4141] mb-40px border-none outline-none cursor-pointer rounded">ADD TO CART</button>
        <p className="mt-[10px] "><span className="font-semibold ">Category : </span>Woman , T-Shirt, Crop Top</p>
        <p className="mt-[10px] "><span className="font-semibold ">Tags : </span>modern, latest</p>
      </div>
    </div>
  );
}
