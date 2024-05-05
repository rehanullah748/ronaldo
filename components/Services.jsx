"use client"
import React from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='flex md:px-5 h-auto  justify-center  bg-[#11242C]'>
<div className='max-w-[1300px] w-full px-4 lg:px-0  mt-[70px]'>
<h1 className='text-[40px] md:[60px] lg:text-[90px] leading-[55px] lg:leading-[110px] font-bold text-center text-white'>What you get by being <span className='block'>ERAKULIS®?</span></h1>
<p className='text-[27px] text-gray-400 font-medium text-center mt-12'>More than an app, we found a full wellness experience.</p>
{/* grid image area */}
<Masonry
  breakpointCols={{default: 2, 750:1}}
  className="my-masonry-grid mt-[80px]"
  columnClassName="my-masonry-grid_column">

  <div className='min-h-[386px] flex flex-col md:flex-row items-center justify-center px-[40px]    !bg-[#D8E8F0] rounded-[20px]'>
    
    <div className='lg:ml-5 pt-11 lg:pt-0 '>
    <h1 className='text-[35px] lg:text-[50px] text-[#0A1B22] font-bold leading-[50px] '>Connect with your devices</h1>
    <p className='text-[#0A1B22] md:mt-9 lg:text-left text-2xl font-medium '>Sync with your <span className='inline md:block'>wearables.</span></p>
    </div>
    <Image className=' w-[220px] h-[230px] md:w-[270px] border sm:ml-9 md:h-[270px] lg:w-[300px] lg:h-[400px] object-cover' src='/phones.webp ' width={300} height={400}/>
  </div>

  <div className='flex justify-center min-h-[800px] px-9  !bg-[#EBAD3F] rounded-[20px]'>
 <div className='mt-7'>
 <h1 className=' text-left text-[45px] md:text-[50px] text-[#0A1B22] font-bold leading-[50px]'>Empowering <span className='block'>Personalised Plans</span></h1>
    <p className='text-[#0A1B22] text-2xl font-medium mt-5 '>Dial up, or dial down! Your sweat should have volume control.</p>
    <Image className=' object-cover mt-[70px]' src='/ronaldojump.webp ' width={1000} height={1200} />
 </div>
    
  </div>

  <div className='relative h-[800px] !bg-[#FFFFFF] rounded-[20px]'>
   <h1 className='absolute top-[40%] right-[17%] text-white text-[45px] font-bold text-center '>Video Appointments <span className='block'>with professionals</span></h1>
   <Image className=' absolute inset-0 w-full h-full object-cover rounded-[20px]' src='/girl.webp' fill/>
  </div>

  <div className='min-h-[760px] !bg-[#0A1B22] relative rounded-[20px]  '>
    <div className='px-[30px] pt-[60px] '>
    <h1 className='text-white text-[45px] font-bold leading-[50px]'>Together we can <span className='block'>achieve our goals</span></h1>
    <p className='text-gray-100 font-semibold text-[20px] mt-5'>Feel connected and inspire others to strive for success.</p>
    <Image className='absolute bottom-0 left-0 right-0  object-cover' src='/phone.webp ' width={600} height={450}/>
    </div>
  </div>

  <div className='min-h-[340px] relative !bg-[#0A1B22] rounded-[20px]'>
  <Image className='absolute top-[0px] right-0 rounded-tr-[20px] rounded-br-[20px] text-center ' src='/food.webp' width={265} height={267}/>
<h1 className='text-[45px] text-white font-bold leading-[50px] pt-[50px] pl-[40px] '>Healthy <span className='block'>meals</span><span>made easy</span> </h1>
<p className='pl-[40px] text-[20px] text-white font-semibold mt-5 leading-[25px]'>Nutrition plans tailored <span className='block'>to your needs.</span> </p>
  </div>

  <div className='h-[610px] sm:h-[630px] md:h-[769px] !bg-[#0A1B22] rounded-[20px]'>
  <Image className=' mx-auto  rounded-[20px]' src='/spoon.webp' width={600} height={440}/>
  <div className='px-[50px] md:px-[85px]'>
    <h1 className='  md:w-[550px] text-[30px] md:text-[46px] text-white font-bold leading-[40px] md:leading-[47px]   '>Conquer Challenges, reap awards</h1>
    <p className='text-[20px]  text-white   leading-[23px] mt-[44px] font-semibold'>Take on the challenges. Go further at your own pace.</p>
  </div>
  </div>

  <div className='h-[610px] sm:h-[630px] md:h-[760px]  !bg-[#EBAD3F] rounded-[20px]'>
    <div className=''>
    <Image className=' mx-auto  rounded-[20px]' src='/headphone.webp' width={600} height={440}/>
    <div className='px-[50px] md:px-[85px]'>
    <h1 className=' md:w-[380px] lg:w-[450px] text-[30px] md:text-[46px] text-[#0A1B22] font-bold leading-[40px] md:leading-[47px]   '>Audiobooks for your inner balance</h1>
    <p className='text-[20px]  text-gray-800   leading-[23px] mt-10 sm:mt-0 font-semibold'>Listen to the best advice. <span className='block'>Anywhere, anytime.</span></p>
    
    </div>
   
    </div>
  </div>
    
</Masonry>
<div className='relative hidden md:block w-full min-h-[400px]   rounded-[20px]'>
<Image className='rounded-[20px]' src='/cristo.webp' width={1400} height={400}/>
<div className='absolute top-[70px] md:top-[50px] left-[20px] w-[450px] px-7'>
<h1 className='w-[300px] text-[47px] md:text-[30px] lg:text-[45px]  font-bold text-black leading-[50px] md:leading-[35px] lg:leading-[50px]'>Find inner balance with Cristiano Ronaldo</h1>
<p className='  text-[20px] font-semibold text-gray-900 mt-10'>Discover personalized mental wellness routines and guided meditations tailored to your needs.</p>
</div>
</div>

<div className='relative block md:hidden  w-full min-h-[1000px]  rounded-[20px]'>
<Image className='rounded-[20px] h-[700px] w-full sm:w-[800px] md:w-full object-cover object-center ' src='/cristomobile.webp' width={500} height={1200}/>
<div className='absolute top-[10px] sm:top-[40px]   px-5'>
<h1 className=' text-[35px]  font-bold text-black leading-[50px]'>Find inner balance with Cristiano Ronaldo</h1>
<p className='  text-[20px] font-semibold text-gray-900 mt-10'>Discover personalized mental wellness routines and guided meditations tailored to your needs.</p>
</div>
</div>

<Masonry
  breakpointCols={{default: 2, 750:1}}
  className="my-masonry-grid md:mt-[30px]"
  columnClassName="my-masonry-grid_column">

  <div className='min-h-[770px]  !bg-[#0A1B22] rounded-[20px] p-9'>
  <Image className='' src='/card1.svg' width={600} height={300} />
    <div className=' space-x-5 ml-[80px] md:ml-[90px] lg:ml-0 w-[130px]   md:w-[140px]   lg:w-full  flex items-center justify-center mt-7  lg:h-[130px]'>
    <Image className='' src='/card2.svg' width={300} height={150} />
    <Image className='' src='/card3.svg' width={300} height={150} />
    </div>
    <h1 className='text-[45px] text-white font-bold leading-[50px] mt-[125px]'>Activity Reports and Progress</h1>
    <p className='text-[20px] text-gray-200 font-semibold mt-9'>Monitor your progress and success. <span className='block'>Stay motivated.</span></p>
  </div>

  <div className='relative min-h-[750px]  rounded-[20px]'>
    <Image className='rounded-[20px] h-[800px] md:h-[770px]' src='/water-intake.webp' width={790} height={750}/>
    <div className='absolute bottom-7 px-8'>
    <h1 className='text-[45px] text-black font-bold leading-[50px] mt-[90px]'>Water tracker. Stay <span className='lmd:inline g:block'>hydrated!</span></h1>
    <p className='text-[20px] text-gray-700 font-semibold mt-9'>Track and manage your water intake and improve  <span className='block'>your well-being.</span></p>
    </div>
  </div>
  
  
</Masonry>
{/* end of grid */}
</div>
    </div>
  )
}

export default Services