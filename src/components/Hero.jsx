import React from 'react'
import sofaBanner from '../assets/sofa-promotional-header.png'
import lampImg from '../assets/lamp.png'

const Hero = () => {
  return (
    <>
      <section className='hero bg-[#F2F0FF]'>
        <div className='container mx-auto relative'>
            <div className='flex gap-10 items-center'>
                <div className='w-1/2'>
                    <div className='hero-content'>
                        <p className='text-base text-pink font-bold leading-7'>
                            Best Furniture For Your Castle....
                        </p>
                        <div className='font-josefin text-[40px] sm:text-[36px] md:text-[50px] font-bold'>
                            New Furniture Collection Trends in 2024
                        </div>
                        <p className='font-lato text-base text-[#8A8FB9] font-bold leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo
                        </p>
                        <button className='font-josefin text-lg bg-pink text-white mt-7 px-10 py-4'>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='hero-image py-10'>
                        <img
                            className='w-full'
                            src={sofaBanner}
                            alt='sofa'
                        />
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-[-280px]'>
                <img className='w-11/12' src={lampImg} alt='Lamp Image'/>
            </div>
            <div className='absolute left-[-110px] bottom-52'>
                <div className='dot bg-pink w-4 h-4 rounded-full'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
