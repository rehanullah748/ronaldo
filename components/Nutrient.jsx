"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Slider from "react-slick";
import Image from 'next/image';
const Nutrient = () => {
const [state] = React.useState([
{
  id: 1,
  image: "/fruite-2.jpg",
  name: "Silvia monterio",
  header: "The influence of food on"
},
{
  id: 1,
  image: "/fruite-1.jpg",
  name: "Maria Benidito",
  header: "How to reduce fluid"
},{
  id: 2,
  image: "/fruite-3.jpg",
  name: "Silvia monterio",
  header: "Intermitting fasting: all"
},{
  id: 3,
  image: "/fruite-4.jpg",
  name: "Silvia monterio",
  header: "7 steps to be physically on"
},{
  id: 4,
  image: "/fruite-1.jpg",
  name: "Silvia monterio",
  header: "Intermitting fasting: all"
},{
  id: 5,
  image: "/fruite-3.jpg",
  name: "Silvia monterio",
  header: "Intermitting fasting: all"
},{
  id: 6,
  image: "/pic-3.webp",
  name: "Silvia monterio",
  header: "Intermitting fasting: all"
},{
  id: 7,
  image: "/pic-4.webp",
  name: "Silvia monterio",
  header: "Intermitting fasting: all"
}
]) 
let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
 
};
  return (
    <>
    <div className='bg-white px-5 md:px-0'>
      <h1 className='text-center text-[35px] font-semibold tet-[#0A1B22] leading-[60px] md:leading-[90px] mt-[150px] mb-[80px]'>Your Plate, Your Choice: Nutrition Adventures Await</h1>
      
    <Swiper
    breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1080: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className=""
  >
    
        {state.map((item)=> (
          <SwiperSlide className=''>
           
            <div className='rounded-xl border-[4px] h-full w-full min-h-[460px]  border-[#D8E8F0] shadow p-6 overflow-hidden'>
           <div className='relative w-full h-[280px] rounded-[20px] overflow-hidden'>
            <Image src={item.image} alt="" fill className='object-cover w-full h-full ]' />
            <button className='absolute bottom-5 left-4 px-4 py-2 rounded-xl bg-white text-lg font-semibold'>Nutrition</button>
           </div>
           <div className='mt-5 w-full'>
           <div className='flex items-center space-x-4'>
            <div className='relative w-[26px] h-[26px]'>
<Image className='rounded-full object-cover' src={item.image} fill/>

            </div>
<span className='flex-1 font-semibold text-left'>{item.name}</span>
           </div>
           <h1 className='mt-5 text-[22px] text-left font-semibold leading-[28px]'>{item.header}</h1>
           </div>
            </div>
            
           
            
            
            </SwiperSlide>
        )
      )}
      
      
    </Swiper>
    <div className='flex items-center justify-center'>
    <button className=' border border-black px-[68px] py-4 rounded-full text-lg font-semibold mt-[80px] mb-[20px]'>View All</button>
    </div>
   
    </div>
   
    </>
  )
}

export default Nutrient
