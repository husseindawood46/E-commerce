import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export default function CardItems() {
  const {getTotalCartAmount,all_product, cartItems,  removeFromCart } = useContext(ShopContext);
  return (
    <div className="my-[100px] mx-[170px] ">
      <div className="grid grid-cols-6 items-center gap-[75px] py-20px px-0 text-[#454545] text-[18px] font-semibold ">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e] border-0"/>

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-6 items-center gap-[75px] py-20px px-0 text-[#454545] text-[17px] font-medium ">
                <img src={e.image} alt="" className="h-[70px] w-[55px] my-0 mx-[40px] " />
                <p className="w-[160px] ">{e.name}</p>
                <p className="ml3">${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff] rounded-sm ">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img
                className="w-[15px] my-0 mx-[40px] cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null
      })}
      <div className="flex my-[100px] mx-0 ">
        <div className="flex-1 flex flex-col mr-[200px] gap-10 ">
            <h1>card Totals</h1>
            <div>
                <div className="flex justify-between py-[15px] px-0 ">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                    <p>Shopping Free</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-[15px] px-0">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer active:bg-red-500 
            ">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex- text-base font-medium ">
            <p className="text-[#555]">if you have a promo code, Enter it here</p>
            <div className="w-[504px] mt-[15px] pl-5 h-[58px] bg-[#eaeaea]">
                <input className="border-none outline-none bg-transparent text-base w-[330px] h-[50px] rounded-md" type="text" placeholder="promo code"  />
                <button className="w-[170px] h-[58px] text-base bg-black text-white cursor-pointer mt-5 ml-40 rounded-md active:bg-slate-900 ">submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
