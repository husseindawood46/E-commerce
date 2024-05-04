import React from "react";
import data_product from "../Assets/data";
import Item from "../item/Item";
export default function Popular() {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[70vh] mx-7 drop-shadow-sm ">
      <h1 className="text-[#171717] text-5xl ont-semibold mt-4">POPULAR IN WOMEN</h1>
      <hr className=" w-[300px] h-[6px]  p-1 rounded-lg bg-[#252525]"/>
      <div className="mt-[50px] flex gap-8">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}
