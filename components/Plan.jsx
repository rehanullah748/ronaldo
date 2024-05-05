import Image from 'next/image'
import React from 'react'

const Plan = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#0D1E26]'>
        <div>
            <div className='mt-[70px] w-full '>
            <h1 className='text-[70px] text-white font-bold leading-[65px] text-center'>Explore our plans</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[100px]   w-full lg:w-[1200px]'>
                <div className='w-[90%] lg:w-full mx-auto  h-[600px] border-white border rounded-lg px-[10px] md:px-[60px]'>
                    <div className='flex  justify-between mt-12'>
                        <h1 className='text-[30px] md:text-[35px] text-white font-bold'>Basic</h1>
                        <div className='flex'>
                            <button className='px-3 py-2 md:px-5 md:py-3 border border-gray-400 rounded-tl-lg rounded-bl-lg text-gray-400'>Monthly</button>
                            <button className='px-3 py-2 md:px-5 md:py-3 border border-gray-400 rounded-br-lg rounded-tr-lg text-white'>Yearly</button>
                        </div>
                    </div>
                    <h1 className='text-[35px] md:text-[45px] text-white font-bold'>50,15€ <span className='text-[20px] text-white font-medium line-through '>59,00€</span><span className='text-whte text-[20px] font-medium px-3'>/Yearly</span> </h1>
                    <p className='text-white font-medium text-[20px]'>Use promo code <span className='text-[20px] font-semibold text-[#2AB492]'>EKYEAR50</span> </p>
                    <ul className='flex flex-col gap-4 mt-9'>
                    <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Activities tracking</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Access to exclusive content</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                    </ul>
                </div>
                <div className=' mx-auto w-[90%] lg-w-full  h-[600px] border-white border rounded-lg'>
                <div className=' px-[60px]'>
                    <div className='flex  justify-between mt-12'>
                        <h1 className='text-[35px] text-[#4CC273] font-bold'>Premium</h1>
                        <div>
                           
                            <button className='px-5 py-2 border border-gray-400 rounded-br-lg rounded-tr-lg text-white'>Yearly</button>
                        </div>
                    </div>
                    <h1 className='text-[45px] text-white font-bold'>219,99€ <span className='text-whte text-[20px] font-medium px-3'>/Yearly</span> </h1>
                    <p className='text-white font-medium text-[20px]'>Use promo code <span className='text-[20px] font-semibold text-[#2AB492]'>EKYEAR50</span> </p>
                    <ul className='flex flex-col gap-4 mt-9'>
                    <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Activities tracking</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Access to exclusive content</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                        <li class="flex items-center gap-2">
                        <Image src='circle-dot.svg' width={20} height={20}/>
                        <p class="text-[15px] font-medium text-white">Personalized plans</p></li>
                    </ul>
                </div>
                </div>
                
            </div>
            
            </div>
            
        </div>
        <button className='px-[130px] py-4 bg-green-500 rounded-full mt-[130px] mb-[60px]'>Sign Up</button>
    </div>
  )
}

export default Plan