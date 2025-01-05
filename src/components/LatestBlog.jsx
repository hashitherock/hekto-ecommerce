import React from 'react'
import BlogImg1 from '../assets/blog-img-1.png'
import BlogImg2 from '../assets/blog-img-2.png'
import BlogImg3 from '../assets/blog-img-3.png'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const LatestBlog = () => {
  return (
    <>
        <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-10'>
                        Leatest Blog
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-8'>
                    <div className='w-full shadow-xl rounded-lg group'>
                        <div className='flex justify-center h-[255px]'>
                            <img src={BlogImg1} alt='Blog Img' className='w-full rounded-lg object-cover' />
                        </div>
                        <div className='px-5 pt-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-lato text-[#72718F] text-base leading-7'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div className='pt-4'>
                                <button class='font-lato text-[#151875] group-hover:text-[#FB2E86] text-base underline underline-offset-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-xl rounded-lg group'>
                        <div className='flex justify-center h-[255px]'>
                            <img src={BlogImg2} alt='Blog Img' className='w-full rounded-lg object-cover' />
                        </div>
                        <div className='px-5 pt-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-lato text-[#72718F] text-base leading-7'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div className='pt-4'>
                                <button class='font-lato text-[#151875] group-hover:text-[#FB2E86] text-base underline underline-offset-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-xl rounded-lg group'>
                        <div className='flex justify-center h-[255px]'>
                            <img src={BlogImg3} alt='Blog Img' className='w-full rounded-lg object-cover' />
                        </div>
                        <div className='px-5 pt-5 pb-9'>
                            <div className='flex gap-7 pb-8'>
                                <div className='flex items-center gap-2'>
                                    <FaPenNib className='text-[#FB2E86] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>SaberAli</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <LuCalendarDays className='text-[#FFA454] text-sm' />
                                    <h5 className='font-josefin text-[#151875] text-sm'>21 August,2020</h5>
                                </div>
                            </div>
                            <h3 className='font-josefin text-[#151875] group-hover:text-[#FB2E86] font-bold text-lg pb-4'>Top esssential Trends in 2021</h3>
                            <p className='font-lato text-[#72718F] text-base leading-7'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <div className='pt-4'>
                                <button class='font-lato text-[#151875] group-hover:text-[#FB2E86] text-base underline underline-offset-4'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LatestBlog
