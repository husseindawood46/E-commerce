import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
export default function Breadcurm(props) {
  const { product } = props;
  return (
    <div className="flex items-center gap-2 text-[#5e5e5e]  text-sm  font-semibold my-[60px] mx-[170px] uppercase ">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  );
}
