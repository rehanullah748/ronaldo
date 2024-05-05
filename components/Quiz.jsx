import Image from 'next/image'
import React from 'react'

const Quiz = () => {
  return (
    
    <div className='flex items-center justify-center px-3 lg:px-7 bg-[#0C1E25]'>
    <div className='max-w-[1300px] px-5 w-full'>
      <h1 className='text-[50px] lg:text-[70px] font-bold text-white mt-[100px] leading-[50px]  text-center'>Take the quiz and get your plan</h1>
      <p className='text-gray-400 text-[20px] font-medium text-center mt-7'>Your goals. Your pace. Your terms.</p>
      
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-[40px] mt-[60px]'>

         <div className='relative w-full h-[550px] !rounded-tl-[160px]  rounded-[22px] overflow-hidden'>

         <div className='z-[99999999999999999] absolute flex  flex-col  items-center top-[50px] left-[50px] lg:top-[50px] lg:left-[70px]'>
                <div className='leading-[40px]'>
                <h1 className='text-[40px] font-bold text-white lg:text-center '>Be active.</h1>
                <h1 className='text-[40px] font-bold text-white lg:text-center'>Be consint.</h1>
                <h1 className='text-[40px] font-bold text-white lg:text-center'>Be authentic.</h1>
                </div>
                <div>
                    <h3 className='text-[25px] text-gray-300 font-medium mt-[300px]'>fitness</h3>
                </div>
            </div>
            <Image className='object-cover' src="/fitness.webp" fill/>
            </div>
            
           



         <div className='relative w-full h-[550px] !rounded-tl-[160px]  rounded-[22px] overflow-hidden'>
         <div className='z-[99999999999999999] absolute flex  flex-col  items-center top-[50px] left-[50px] lg:top-[50px] lg:left-[70px]'>
                <div className='leading-[40px]'>
                <h1 className='text-[40px] font-bold text-white text-center'>Connected by</h1>
                <h1 className='text-[40px] font-bold text-white text-center'>Purpose,</h1>
                <h1 className='text-[40px] font-bold text-white text-center'>Driven by</h1>
                <h1 className='text-[40px] font-bold text-white text-center'>Motivation.</h1>
                </div>
                <div>
                    <h3 className='text-[25px] text-gray-300 font-medium mt-[260px]'>Nutrition</h3>
                </div>
            </div>
            <Image className='object-cover' src="/nutrition.webp" fill/>
            </div>

         <div className='relative w-full h-[550px] !rounded-tl-[160px]  rounded-[22px] overflow-hidden'>
         <div className='z-[99999999999999999] absolute flex  flex-col  items-center top-[50px] left-[50px] lg:top-[50px] lg:left-[70px]'>
                <div className='leading-[40px]'>
                <h1 className='text-[40px] font-bold text-white text-center'> Be stronger.</h1>
                <h1 className='text-[40px] font-bold text-white text-center'>Be healthier.</h1>
                <h1 className='text-[40px] font-bold text-white text-center'>Be happier.</h1>
                </div>
                <div>
                    <h3 className='text-[25px] text-gray-300 font-medium mt-[300px]'>Mental Balance</h3>
                </div>
            </div>
            <Image className='object-cover' src="/mental.webp" fill/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='px-8 py-5 bg-green-400 text-white font-medium text-lg rounded-[50px] text-center mt-[100px]'>Start your journey</button>
        </div>
     
    </div>
  </div>
  
  )
}

export default Quiz
