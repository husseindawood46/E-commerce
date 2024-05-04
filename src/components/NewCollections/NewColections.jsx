import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../item/Item'
export default function NewColections() {
  return (
    <div className='flex flex-col items-center gap-[10px] mb-[100px] mx-7 '>
        <h1 className='text-[#171717] text-5xl ont-semibold mt-4'>NEW COLLECTIONS</h1>
        <hr className=' w-[300px] h-[6px]  p-1 rounded-lg bg-[#252525]'/>
        <div className='mt-[50px] grid grid-cols-4  gap-[30px]'> 
            {new_collections.map((item,i)=>{
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
