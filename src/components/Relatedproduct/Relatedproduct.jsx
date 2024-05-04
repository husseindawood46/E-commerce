import React from 'react'
import data_product from'../Assets/data'
import Item from '../item/Item'
export default function Relatedproduct() {
  return (
<div className='flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[#171717] text-5xl font-semibold '>Related products</h1>
        <hr className='w-[300px] h-[6px] rounded-[10px] bg-[#252525]'/>
        <div className="m-[90px] flex gap-7 ">
            {data_product.map((item,i)=>{
                return<Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
        </div>
    </div>
  )
}
