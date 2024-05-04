import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/item/Item";
export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopCategory">
      <img className="block my-[30px] mx-auto w-[82%]" src={props.banner} alt="image found"  />
      <div className="flex my-0 mx-[170px] justify-between items-center ">
        <p>
          <span className="font-semibold  ">Showing 1-12</span>out of 36 products
        </p>
        <div className="py-[10px] px-[20px] rounder-[40px] border border-solid border-[#888] ">
          sort by
          <img src={dropdown_icon}  alt="image found"/>
        </div>
      </div>
      <div className="my-[10px] mx-[150px] grid grid-cols-4 gap-[30px] ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } 
          else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px]  font-medium  cursor-pointer  active:bg-[#f3f3f3]">
        Explore More
      </div>
    </div>
  );
}
