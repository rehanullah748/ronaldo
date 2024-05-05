import Image from 'next/image'
import React from 'react'

const Fitness = () => {
  return (
    <div className='relative flex items-center justify-center px-3 md:px-4 bg-[#0A1B22] h-screen'>
      <Image className='absolute -top-[1px]' src='/half-circle.svg' width={403} height={146} />
      <div>
      
      <h1 className='text-white text-[50px] lg:text-[77px]  font-bold text-center leading-[50px]  md:leading-[83px]'>Personalised Fitness, <span className= 'inline md:block'>Nutrition and Mental</span> Balance plans</h1>
      <p className='text-white text-2xl font-semibold mt-[60px] text-center'>Unleash the ERAKULIS® Experience.</p>
      </div>
      
    </div>
  )
}

export default Fitness
