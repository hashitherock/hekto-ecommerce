import React from 'react'
import TrendingImg1 from '../assets/Trending-Products-1.png'
import TrendingImg2 from '../assets/Trending-Products-2.png'
import TrendingImg3 from '../assets/Trending-Products-3.png'
import TrendingImg4 from '../assets/Trending-Products-4.png'
import TrendingImg5 from '../assets/Trending-Products-5.png'
import TrendingImg6 from '../assets/Trending-Products-6.png'
import TrendingImg7 from '../assets/Trending-Products-7.png'
import TrendingImg8 from '../assets/Trending-Products-8.png'
import TrendingImg9 from '../assets/Trending-Products-9.png'
import { Link } from 'react-router-dom'

const TrendingProducts = () => {
  return (
    <>
        <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-10'>
                        Trending Products
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-8'>
                    <div className='w-full shadow-lg text-center p-3 group'>
                        <div className='flex justify-center bg-[#F5F6F8] py-10'>
                            <img src={TrendingImg1} alt='Trending Products' className='h-44 object-cover' />
                        </div>
                        <div className='my-4'>
                            <h4 className='font-lato font-bold text-base text-[#151875] pb-2'>Cantilever chair</h4>
                            <div className='flex gap-3 items-center justify-center'>
                                <h5 className='font-josefin text-[#151875]'>$26.00</h5>
                                <h5 className='font-josefin text-[#1518756c] text-xs'>$42.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-lg text-center p-3 group'>
                        <div className='flex justify-center bg-[#F5F6F8] py-10'>
                            <img src={TrendingImg2} alt='Trending Products' className='h-44 object-cover' />
                        </div>
                        <div className='my-4'>
                            <h4 className='font-lato font-bold text-base text-[#151875] pb-2'>Cantilever chair</h4>
                            <div className='flex gap-3 items-center justify-center'>
                                <h5 className='font-josefin text-[#151875]'>$26.00</h5>
                                <h5 className='font-josefin text-[#1518756c] text-xs'>$42.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-lg text-center p-3 group'>
                        <div className='flex justify-center bg-[#F5F6F8] py-10'>
                            <img src={TrendingImg3} alt='Trending Products' className='h-44 object-cover' />
                        </div>
                        <div className='my-4'>
                            <h4 className='font-lato font-bold text-base text-[#151875] pb-2'>Cantilever chair</h4>
                            <div className='flex gap-3 items-center justify-center'>
                                <h5 className='font-josefin text-[#151875]'>$26.00</h5>
                                <h5 className='font-josefin text-[#1518756c] text-xs'>$42.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow text-center p-3 group'>
                        <div className='flex justify-center bg-[#F5F6F8] py-10'>
                            <img src={TrendingImg4} alt='Trending Products' className='h-44 object-cover' />
                        </div>
                        <div className='my-4'>
                            <h4 className='font-lato font-bold text-base text-[#151875] pb-2'>Cantilever chair</h4>
                            <div className='flex gap-3 items-center justify-center'>
                                <h5 className='font-josefin text-[#151875]'>$26.00</h5>
                                <h5 className='font-josefin text-[#1518756c] text-xs'>$42.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10 '>
                    <div className='w-full bg-[#FFF6FB] group'>
                        <div className='pt-8 pl-6'>
                            <h3 className='font-josefin font-semibold text-[#151875] text-2xl'>23% off in all products</h3>
                            <div className='pt-3'>
                                <button class='font-lato font-semibold text-base text-[#FB2E86] underline'>Shop Now</button>
                                {/* <Link to={}>Shop Now</Link> */}
                                {/* <Link to='/'>Shop Now</Link> */}
                            </div>
                            <div className='flex justify-end'>
                                <img src={TrendingImg5} alt='Trending Products' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-[#EEEFFB] group'>
                        <div className='pt-8 pl-6'>
                            <h3 className='font-josefin font-semibold text-[#151875] text-2xl'>23% off in all products</h3>
                            <div className='pt-3'>
                                <button class='font-lato font-semibold text-base text-[#FB2E86] underline'>View Collection</button>
                            </div>
                            <div className='flex justify-end'>
                                <img src={TrendingImg6} alt='Trending Products' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center bg-[#F5F6F8] py-3 px-5'>
                                <img src={TrendingImg7} alt='Trending Products' className='object-cover' />
                            </div>
                            <div>
                                <h5 className='font-josefin font-semibold  text-base text-[#151875]'>Executive Seat chair</h5>
                                <h5 className='font-josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center bg-[#F5F6F8] py-3 px-5'>
                                <img src={TrendingImg8} alt='Trending Products' className='object-cover' />
                            </div>
                            <div>
                                <h5 className='font-josefin font-semibold  text-base text-[#151875]'>Executive Seat chair</h5>
                                <h5 className='font-josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center bg-[#F5F6F8] py-3 px-5'>
                                <img src={TrendingImg9} alt='Trending Products' className='object-cover' />
                            </div>
                            <div>
                                <h5 className='font-josefin font-semibold  text-base text-[#151875]'>Executive Seat chair</h5>
                                <h5 className='font-josefin text-xs font-medium text-[#151875] line-through pt-1'>$32.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TrendingProducts
