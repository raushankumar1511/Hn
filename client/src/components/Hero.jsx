import React from 'react'

export const Hero = () => {
  return (
    <div className=" flex justify-between m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 bg-white h-full rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16">
<div className=''>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-normal font-semibold ml-4 sm:ml-8 md:ml-12 lg:ml-16'>LET'S</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-normal font-semibold ml-4 sm:ml-8 md:ml-12 lg:ml-16'>EXPLORE</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ml-4 sm:ml-8 md:ml-12 lg:ml-16'>HONESTLY</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ml-4 sm:ml-8 md:ml-12 lg:ml-16'>NVRMIND.</h1>
        <button className='bg-black w-36 sm:w-60 md:w-72 lg:w-80 h-14 font-semibold text-white mt-6 rounded-lg ml-4 sm:ml-8 md:ml-8 lg:ml-8 transition-bg transition-text duration-200 hover:bg-yellow-300 hover:text-black'>Our Products</button>
</div>
<div className='mr-20'>3D</div>
</div>

  )
}
export default Hero;