import Image from 'next/image'
import React from 'react'

const AppStore = () => {
  return (
    <div className='bg-[#11242C]  px-6 md:px-[90px] lg:px-[130px] flex items-center justify-center'>
      <div className=' grid grid-cols-1 lg:grid-cols-2'>
        <Image className='' src='/app-mobile.webp' width={600} height={700}/>
        <div className='md:mt-[120px] lg:mt-[190px]'>
            <h1 className=' font-bold  text-white text-[55px] leading-[64px] md:text-[70px] lg:text-[80px] md:leading-[76px]  lg:leading-[85px]'>Available on the App Store & Play Store</h1>
            <button className='bg-white w-full lg:w-[250px] py-3 rounded-full md:text-lg font-semibold mt-9'>Download for iOS</button>
            <button className='bg-white w-full lg:w-[250px] py-3 rounded-full text-lg font-semibold mt-4 block'>Download for Android</button>
        </div>
      </div>
    </div>
  )
}

export default AppStore
