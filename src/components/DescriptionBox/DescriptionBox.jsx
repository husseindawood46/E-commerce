import React from 'react'

function DescriptionBox() {
  return (
    <div className='my-[120px] mx-[170px]'>
      <div className="flex ">
        <div className="flex items-center justify-center text-[16px] font-semibold  w-[175px] h-[70px] border border-solid border-[#d0d0d0]">Description</div>
        <div className="flex items-center justify-center text-[16px] font-semibold  w-[175px] h-[70px] border border-solid border-[#d0d0d0] bg-[#fbfbfb] text-[#555] ">Reviews(122)</div>
      </div>
      <div className="flex flex-col gap-[25px] border border-solid border-[#D0D0D0] p-12 pb-[70PX] ">
        <p>An e-commerce website is an online that facilitates the buying and selling of products or services over the internet.it serves as virtual marketplace where business and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience,accessibility ,and the global reach they offer. </p>
        <p>E-commerce website typically display product or services along with detailed descriptions,images,prices,and any available variations(e.g,size,colors).Each product usually has its own dedicated page with relevant information. </p>
      </div>
    </div>
  )
}

export default DescriptionBox