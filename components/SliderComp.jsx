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
const SliderComp = () => {
const [state] = React.useState([
{
  id: 1,
  image: "/pic-1.webp",
  name: "Silvia monterio"
},
{
  id: 1,
  image: "/pic-2.webp",
  name: "Silvia monterio"
},{
  id: 2,
  image: "/pic-3.webp",
  name: "Silvia monterio"
},{
  id: 3,
  image: "/pic-4.webp",
  name: "Silvia monterio"
},{
  id: 4,
  image: "/pic-1.webp",
  name: "Silvia monterio"
},{
  id: 5,
  image: "/pic-2.webp",
  name: "Silvia monterio"
},{
  id: 6,
  image: "/pic-3.webp",
  name: "Silvia monterio"
},{
  id: 7,
  image: "/pic-4.webp",
  name: "Silvia monterio"
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
      <h1 className='text-center text-[55px] md:text-[80px] font-semibold tet-[#0A1B22] leading-[60px] md:leading-[90px] mt-[150px] mb-[80px]'>Our experts will help <span className='inline md:block'>you reach your goals</span> </h1>
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
    className="mySwiper"
  >
    
        {state.map((item)=> (
          <SwiperSlide>
           
            <div className='relative h-[400px] rounded-xl'>
            <img alt="professional" loading="lazy" decoding="async" data-nimg="fill" className="rounded-xl z-10 w-full h-full absolute inset-0 object-cover"  src={item.image} ></img>
            <button className='bg-white rounded-lg px-6 py-[5px] absolute z-[9999999] bottom-4 left-[50px] text-semibold'>Fitness</button>
            <h3 className='text-[25px] font-bold text-white absolute z-[9999999] bottom-[60px] left-[50px]'>{item.name}</h3>
            </div>
           
           
            
            
            </SwiperSlide>
        )
      )}
      
      
    </Swiper>
    <div className='h-[200px] w-full md:h-[300px] bg-[#0A1B22]  mt-[50px] md:mx-[140px] flex items-center justify-center rounded-xl'>
      <div className='block  md:flex justify-between items-center'>
        <div className=' '>
        <h1 className='text-[25px] md:text-[40px] text-white font-bold '>Schedule an appointment today.</h1>
        <p className='text-white font-semibold text-[20px]'>Exclusive for ERAKULIS® Members.</p>
        </div>
      
      <button className='mt-[20px] md:mx-9 md:mt-0 px-[50px] py-2 md:px-[65px] md:py-4 rounded-full text-lg bg-green-400 '>sign-up</button>
      </div>
     
    </div>
    </div>
   
    </>
  )
}

export default SliderComp
