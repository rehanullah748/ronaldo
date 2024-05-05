import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='flex h-screen'>
    <div className='flex flex-col justify-center  items-center bg-[#0A1B22] w-full xl:w-5/12 px-6  xl:px-[90px] h-full mt-5 md:mt-0  '>
      <Image className='mt-[10px] md:mt-0' src='/logo.svg' width={300} height={50}/>
      <p className='text-white text-2xl leading-loose font-semibold uppercase mt-7 hidden md:block'>Break the Limit</p>
      <h1 className='text-white text-2xl font-medium md:font-bold mt-[40px] md:mt-6'>Sign Up</h1>
      <p className='text-xl mt-5 font-medium text-white '>Already have an account? <Link className='text-blue-500' href={'/'}>Login</Link> </p>
      <input
    type="Name"
    placeholder="Email"
    className=" w-full py-5 mb-6 mt-5 bg-[#1D323B] p-4 rounded-md"
  />
  <input
    type="E-mail"
    placeholder="Password"
    className="  w-full py-5 p-4  bg-[#1D323B] rounded-md"
  />
   <input
    type="password"
    placeholder="Password"
    className="  w-full py-5 p-4 mt-5 bg-[#1D323B] rounded-md"
  />
   <input
    type="password"
    placeholder="Confirm Password"
    className="  w-full py-5 p-4 mt-5 bg-[#1D323B] rounded-md"
  />

<div className="-ml-[185px] mt-5">
        <label className="flex items-center text-white font-medium mb-2 ml-2">
          <input
            type="checkbox"
    
            className="h-6 w-6 bg-[#0A1B22] "
          />
          <span className="text-lg px-3">I agree to the terms and conditions</span>
        </label>
      </div>
      <div className="-ml-[185px] mt-3">
        <label className="flex items-center text-white font-medium mb-2 -ml-6">
          <input
            type="checkbox"
    
            className="h-6 w-6 bg-[#0A1B22] "
          />
          <span className="text-lg px-3">I accept reciving news by email</span>
        </label>
      </div>
  
  <button className='w-full py-5 bg-[#6FD792] text-white text-lg font-semibold mt-5 rounded-md'>Login</button>
    </div>
    <div className='lg:block hidden bg-[url("/circles.svg")] xl:flex items-end justify-center bg-[#1D323B] w-7/12 h-full'>
     
      <Image className='' src={'/login.png'} width={380} height={800} alt='circle'/>
  
    </div>

</div>
  )
}

export default Register