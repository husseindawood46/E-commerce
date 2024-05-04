import React from 'react'
import Footer_logo from'../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-12 '>
        <div className='flex items-center gap-5'>
            <img src={Footer_logo} alt=''/>
            <p className='text-[#383838] text-5xl font-bold '>Shopper</p>
        </div>
        <ul className="flex list-none gap-12 text-[#252525] text-xl ">
            <li className='cursor-pointer '>Company</li>
            <li className='cursor-pointer '>Product </li>
            <li className='cursor-pointer '>Offices</li>
            <li className='cursor-pointer '>About</li>
            <li className='cursor-pointer '>Contact </li>
        </ul>
        <div className='flex gap-5 '>
            <div className="p-[10px] pt-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] active:bg-[#f3f3f3] rounded-sm">
                <img src={instagram_icon} alt=''/>
            </div>
            <div className="p-[10px] pt-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] active:bg-[#f3f3f3] rounded-sm">
                <img src={pintester_icon} alt=''/>
            </div>
            <div className="p-[10px] pt-[6px] bg-[#fbfbfb] border border-solid border-[#ebebeb] active:bg-[#f3f3f3] rounded-sm">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className='flex flex-col items-center gap-7 w-full mb-[30px] text-[#1a1a1a] text-[20px] '>
            <hr className='w-[80%] border-none rounded-lg h-[3px] bg-[#c7c7c7]'/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
