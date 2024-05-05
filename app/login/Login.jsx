import Image from 'next/image'
import Link from 'next/link'
import { Input } from 'postcss'
import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col justify-center -mt-[100px] lg:-mt-0  items-center bg-[#0A1B22] w-full lg:w-5/12 px-7 lg:px-[90px] h-full  '>
          <Image className='w-[200px] lg:w-[400px] lg:h-[50px]' src='/logo.svg' width={400} height={50}/>
          <p className='text-white text-2xl leading-loose font-semibold uppercase mt-7 hidden lg:block'>Break the Limit</p>
          <h1 className='text-white text-4xl font-bold mt-[40px] lg:mt-[80px]'>Log in</h1>
          <p className='text-xl mt-5 font-medium text-white '>Don't have an account? <Link className='text-blue-500' href={'/'}>Sign up</Link> </p>
          <input
        type="email"
        placeholder="Email"
        className=" w-full py-5 mb-6 mt-5 bg-[#1D323B] rounded-md p-4"
      />
      <input
        type="password"
        placeholder="Password"
        className="  w-full py-5 p-4 bg-[#1D323B] rounded-md"
      />
      <Link href={'/'} className='text-base font-medium text-right  w-full text-white mt-5 underline'>Forgot password?</Link>
      <button className='w-full py-5 bg-[#6FD792] text-white text-lg font-semibold mt-5 rounded-md'>Login</button>
        </div>
        <div className='hidden bg-[url("/circles.svg")] lg:flex items-end justify-center bg-[#1D323B] w-7/12 h-full'>
         
          <Image className='' src={'/login.png'} width={380} height={800} alt='circle'/>
      
        </div>

    </div>
  )
}

export default Login