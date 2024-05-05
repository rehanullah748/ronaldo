import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0A1B22] px-8 lg:px-[170px] py-[90px] h-full lg:h-[600px] w-full'>
        <Image className='text-white' src='/slogan.svg' width={200} height={100}/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] mt-10'>
            <p className='text-[#8EA0A5] text-md '>ERAKULIS® is more than an app, it's an all-in-one wellness experience. Taking care of your physical and mental health is essential for a fulfilling life, and we are here to support you every step of the way. We have a team of certified experts who will take the time to listen to your story, understand your aspirations, and craft a tailored wellness experience plan that aligns with your goals and lifestyle.</p>
            <div className=' lg:flex justify-between items-center space-y-9 lg lg:space-x-9 lg:space-y-0 mt-8 lg:mt-0'>
            <Image className='text-white' src='/norte2020.svg' width={100} height={100}/>  
            <Image className='text-white' src='/portugal2020.svg' width={120} height={100}/>
            <Image className='text-white' src='/right.svg' width={150} height={100}/>
            </div>
        </div>
        
        <div className="mt-[60px] w-full border-t border-[#1D323B] py-4"></div>
        <div className='space-y-[50px] lg:space-y-0 lg:flex justify-between mt-[30px]'>
        <div className='flex items-center space-x-10'>
            <Image className='text-white' src='/facebook.svg' width={26} height={60}/>
            <Image className='text-white' src='/twitter.svg' width={26} height={60}/>
            <Image className='text-white' src='/youtube.svg' width={26} height={60}/>
            <Image className='text-white' src='/instagram.svg' width={26} height={60}/>
            <Image className='text-white' src='/tiktok.svg' width={26} height={60}/>
            </div>
        <ul className='lg:flex items-center justify-center space-y-6 lg:space-y-0 lg:space-x-5'>
            <li className='text-lg lg:text-sm text-white font-medium'>Privacy Policy</li>
            <li className='text-lg lg:text-sm text-white font-medium'>Terms & Conditions</li>
            <li className='text-lg lg:text-sm text-white font-medium'>Cookies Policy</li>
            <li className='text-lg lg:text-sm text-white font-medium'>Help Center</li>
        </ul>
        </div>
       <div className='mt-[45px] lg:flex items-center justify-between '>
        <p className='text-md text-white font-semiblod'>© 2024. ERAKULIS®. All rights reserved.</p>
        <h1 className='text-2xl font-semibold text-white mt-6 lg:mt-3'>Founded by <span className='text-[#EBAD3F]'>CR7</span></h1>
       </div>
    </div>
  )
}

export default Footer