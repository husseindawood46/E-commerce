import React from 'react'

export default function LoginSignup() {
  return (
    <div className='w-full h-[120vh] bg-[#fce3fe]  pt-[100px] rounded  shadow-md'>
      <div className="w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px] shadow-md">
        <h1 className='my-[20px] mx-[0px] text-xl font-bold '> Sign Up</h1>
        <div className="flex flex-col gap-[29px] mt-[30px] ">
          <input className='h-[52px] w-[100%] pl-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-sm' type="text" placeholder='Name' />
          <input className='h-[52px] w-[100%] pl-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-sm' type="email" placeholder='Email Address' />
          <input className='h-[52px] w-[100%] pl-5 border border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-sm' type="password" placeholder='Password' />
        </div>
        <button className='w-[465px] h-[52px] text-white bg-[#ff4141] mt-[30px] border-none text-2xl font-medium cursor-pointer rounded-sm active:bg-red-600'>Continue</button>
        <p className="mt-[20px] text-[#5c5c5c] text-[18px] font-medium ">
          Already have an account?<span className='text-[#ff4141] font-semibold '>Login here</span>
          <div className='flex items-center  mt-[25px] gap-5 text-[#5c5c5c] text-[18px] font-medium pb-11'>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of user & privacy policy. </p>
          </div>
        </p>
      </div>
    </div>
  )
}
