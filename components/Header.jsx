import Image from 'next/image'


const Header = () => {
  return (
    
    <div className='h-full md:h-screen  w-auto flex justify-center  items-center'>
      <div className='relative mt-[100px]'>
        <h1 className='text-white text-[30px] sm:text-[50px]  md:text-[60px] lg:text-[100px]  font-semibold text-center leading-[30px] sm:leading-[45px] md:leading-[95px]  '>Get ready for an <span className='block'>unforgettable journey</span> </h1>
        <p className='hidden md:block text-center items-center justify-center text-white text-[42px] font-medium mt-[50px]'>ERAKULIS® transforms your well-being.</p>
        <div className=' md:ml-0 flex flex-col md:flex-row  items-center md:justify-center md:space-x-3 text-white mt-[70px]'>
          <h1 className='text-xl tracking-tight'>Sign-up for a 30-day FREE TRIAL</h1>
          <button className='mt-[100px]  md:ml-0 md:mt-0  px-[60px] py-4 bg-[#4CC273] rounded-[100px] text-[20px] font-semibold'>Join us</button>
        </div>
        <h1 className='flex justify-center items-center text-white text-[25px] font-semibold mt-[70px] md:mt-10'>Founded by <span className='ml-1 font-semibold text-[25px] text-[#EBAD41]'>CR7</span></h1>
        <div className='hidden md:block absolute top-[80%] -left-[170px]'>
        <h1 className='text-white mb-[40px] '>Co-financed by:</h1>
        <div className='flex gap-x-[50px]'>
          <Image src='/norte2020.svg' width={70} height={50}/>
          <Image src='/portugal2020.svg' width={80} height={60}/>
          <Image src='/right.svg' width={100} height={80}/>
        </div>
        </div>
      </div>
      <div>
        
      </div>
     <picture className='hidden md:block '>
     <Image src="/ronaldo.webp" alt="hero" fill className="absolute inset-0 -z-10 size-full object-cover object-top" loading="eager"/></picture>
     <picture className='md:hidden '>
     <Image src="/ronaldo-m.webp" alt="hero" fill className="absolute inset-0 -z-10 size-full object-cover object-top" loading="eager"/></picture>
    </div>
  )
}

export default Header
