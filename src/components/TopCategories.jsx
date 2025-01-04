import React from 'react'
import LCWChair from '../assets/lcw-chair.png'
import FeaturedImg1 from '../assets/featured-product-1.png'
import TrendingImg1 from '../assets/Trending-Products-1.png'

const TopCategories = () => {
  return (
    <>
        <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-10'>
                        Top Categories
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-8'>
                    <div className='w-full relative group'>
                        <div className='relative flex items-center justify-center rounded-full w-[269px] h-[269px] bg-[#F6F7FB]'>
                            <img src={LCWChair} alt='Photo' className='h-44 object-cover' />
                            <button className='absolute -bottom-14 left-20 group-hover:bottom-8 ease-in-out  duration-500 opacity-0 group-hover:opacity-100 font-josefin py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] '>View Shop</button>
                        </div>
                        <div className='w-[269px] h-[269px] group-hover:bg-[#9877E7] rounded-full absolute top-2 -left-2 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-500'></div>
                        <div className='text-center my-6'>
                            <h4 className='font-josefin text-xl text-[#151875] pb-2'>Mini LCW Chair</h4>
                            <p className='font-josefin text-base text-[#151875]'>$56.00</p>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <div className='relative flex items-center justify-center rounded-full w-[269px] h-[269px] bg-[#F6F7FB]'>
                            <img src={FeaturedImg1} alt='Photo' className='h-44 object-cover' />
                            <button className='absolute -bottom-14 left-20 group-hover:bottom-8 ease-in-out  duration-500 opacity-0 group-hover:opacity-100 font-josefin py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] '>View Shop</button>
                        </div>
                        <div className='w-[269px] h-[269px] group-hover:bg-[#9877E7] rounded-full absolute top-2 -left-2 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-500'></div>
                        <div className='text-center my-6'>
                            <h4 className='font-josefin text-xl text-[#151875] pb-2'>Mini LCW Chair</h4>
                            <p className='font-josefin text-base text-[#151875]'>$56.00</p>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <div className='relative flex items-center justify-center rounded-full w-[269px] h-[269px] bg-[#F6F7FB]'>
                            <img src={TrendingImg1} alt='Photo' className='h-44 object-cover' />
                            <button className='absolute -bottom-14 left-20 group-hover:bottom-8 ease-in-out  duration-500 opacity-0 group-hover:opacity-100 font-josefin py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] '>View Shop</button>
                        </div>
                        <div className='w-[269px] h-[269px] group-hover:bg-[#9877E7] rounded-full absolute top-2 -left-2 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-500'></div>
                        <div className='text-center my-6'>
                            <h4 className='font-josefin text-xl text-[#151875] pb-2'>Mini LCW Chair</h4>
                            <p className='font-josefin text-base text-[#151875]'>$56.00</p>
                        </div>
                    </div>
                    <div className='w-full relative group'>
                        <div className='relative flex items-center justify-center rounded-full w-[269px] h-[269px] bg-[#F6F7FB]'>
                            <img src={LCWChair} alt='Photo' className='h-44 object-cover' />
                            <button className='absolute -bottom-14 left-20 group-hover:bottom-8 ease-in-out  duration-500 opacity-0 group-hover:opacity-100 font-josefin py-2 px-5 rounded bg-[#08D15F] text-[#FFFFFF] '>View Shop</button>
                        </div>
                        <div className='w-[269px] h-[269px] group-hover:bg-[#9877E7] rounded-full absolute top-2 -left-2 -z-10 opacity-0 group-hover:opacity-100 ease-in-out duration-500'></div>
                        <div className='text-center my-6'>
                            <h4 className='font-josefin text-xl text-[#151875] pb-2'>Mini LCW Chair</h4>
                            <p className='font-josefin text-base text-[#151875]'>$56.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TopCategories
