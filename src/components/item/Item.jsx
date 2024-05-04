import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="w[350px]">
     <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} /></Link>
      <p className="mx-6 my-0 ">{props.name}</p>
      <div className="flex gap-5 ">
        <div className="text-[#374151] text-[18px] font-semibold ">
           $ {props.new_price}
            <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
                $ {props.old_price}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
