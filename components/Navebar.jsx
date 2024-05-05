"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
const Navebar = () => {
  const {push} = useRouter()
  const [state, setstate] = useState(false)
  const [menu, setMenu] = useState(false)
 const LoginForm = () => {
  push('/login')
 }
  return (

    <nav className='fixed w-full py-[22px] px-4 md:px-11 z-[99] bg-[#10232A]'>
      {/* mobile navebar */}
      {menu &&  <div className='absolute xl:hidden block top-full right-0 w-full md:w-6/12 lg:w-4/12 p-6 bg-[#10232A] h-screen '>
      <ul className='flex flex-col items-center pt-[100px]   gap-y-7 text-white '>
        <li><Link className='font-semibold text-2xl px-3' href={'/'}>Fitness</Link></li>
        <li><Link className='font-semibold text-2xl px-3' href={'/'}>Nutrition</Link></li>
        <li><Link className='font-semibold text-2xl px-3' href={'/'}>Mental Balance</Link></li>
        <li><Link className='font-semibold text-2xl px-3' href={'/'}>Articles</Link></li>
    </ul>
    <div className='flex flex-col gap-y-8 items-center mt-20'>
    <button onClick={LoginForm}  className='block border-2 border-white text-lg font-bold px-12 py-2 rounded-full text-white  hover:border-gray-100 active:border-gray-200 '>Login</button>
    <button className=' block bg-green-500 text-lg font-bold px-12 py-2  rounded-full text-white  hover:border-gray-100 active:border-gray-200'>SingIn</button>
    </div>
   
     
      </div>}
     
      <div className='flex justify-between items-center  md:px-5'>
    <Image className='text-white w-[140px] h-[30px] lg:w-[200px] lg:h-[35px]' src='/logo.svg' width={200} height={30}/>
   
    <ul className='hidden xl:flex items-center gap-x-4 text-white'>
        <li><Link className='font-semibold text-xl px-3' href={'/'}>Fitness</Link></li>
        <li><Link className='font-semibold text-xl px-3' href={'/'}>Nutrition</Link></li>
        <li><Link className='font-semibold text-xl px-3' href={'/'}>Mental Balance</Link></li>
        <li><Link className='font-semibold text-xl px-3' href={'/'}>Articles</Link></li>
    </ul>
<div className='flex items-center gap-x-6 '>
<div onClick={()=>setstate(!state)} className='relative flex items-center gap-x-3 cursor-pointer'>
  {state && <div className='absolute left-0  top-[120%]  bg-[#0a1b22] !z-50 rounded-xl'> 
  <ul className='py-[10px]   px-6'>
    <li className='text-white uppercase py-2 font-bold'>PT</li>
    <li className='text-white uppercase py-2 font-bold'>ES</li>
    <li className='text-white uppercase py-2 font-bold'>FR</li>
  </ul>
  </div>}
    <Image src='/internet.svg' width={30} height={30} />
    <h1 className='text-white text-xl font-semibold'>EN</h1>
    </div>
    <button className='hidden xl:block border-2 border-white text-lg font-bold px-8 py-5 rounded-full text-white min-h-[74px] min-w-[145px] hover:border-gray-100 active:border-gray-200 '>Login</button>
    <button className='hidden xl:block bg-green-500 text-lg font-bold px-8 py-5 min-h-[74px] rounded-full text-white min-w-[145px] hover:border-gray-100 active:border-gray-200'>Join Us</button>
    {menu ? <span onClick={()=>setMenu(!menu)} className='text-green-500 block xl:hidden'><RxCross2 size={30} /></span> 
    :
    <span onClick={()=>setMenu(!menu)}  className='text-green-500 block xl:hidden'><GiHamburgerMenu size={30} /></span>
      }
    
    
</div>

      </div>
    </nav>
  )
}

export default Navebar
