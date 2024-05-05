import Image from 'next/image'
import React from 'react'

const RonaldoWorkOut = () => {
  return (
    <div className='relative w-full min-h-[650px]'>
        <Image src="/juice.webp" className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" fill/>
      
       <div className='absolute z-[99999] top-[160px] lg:top-[32%] lg:bottom-[50%] lg:left-[250px] md:top-[32%] md:bottom-[50%] md:left-[100px] '>
        <h1 className=' text-[45px] text-center md:text-[50px] lg:text-[70px] font-bold text-white leading-[45px] md:leading-[50px] lg:leading-[70px] '>A good workout must be <span className='inline md:block'>combined with a good diet.</span> </h1>
        <p className='text-[30px] md:text-[30px] g:text-[45px] text-center font-semibold text-white mt-7'>- Cristiano Ronaldo</p>
       </div>

    </div>
  )
}

export default RonaldoWorkOut