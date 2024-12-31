import React from 'react'
import FeaturedImg1 from '../assets/featured-product-1.png'
import FeaturedImg2 from '../assets/featured-product-2.png'
import FeaturedImg3 from '../assets/featured-product-3.png'
import FeaturedImg4 from '../assets/featured-product-4.png'

import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6"
import { LuSearchX } from "react-icons/lu"

const FeaturedProducts = () => {
  return (
    <>
      <section className='featured-products pt-28 pb-10'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <h2 className='font-josefin text-[42px] font-bold text-[#1A0B5B] mb-10'>
                    Featured Products
                </h2>
            </div>
            <div className='flex gap-7'>
                <div className='w-full shadow-lg group'>
                    <div className='h-full bg-white group-hover:bg-[#2F1AC4] transition'>
                        <div className='relative flex justify-center bg-[#F6F7FB] pt-10 pb-4'>
                            <img
                                className='h-40 hover:scale-125 transition-all ease-in-out duration-700'
                                src={FeaturedImg1}
                                alt='Chair'
                            />
                            <div className='absolute cursor-pointer flex items-center gap-3 top-4 -left-52 opacity-0 group-hover:left-5 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#2F1AC4] hover:text-[#1DB4E7]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                            </div>
                            <div className='absolute bottom-4 -left-52 opacity-0 group-hover:opacity-100 group-hover:left-[30%]'>
                                <button className='font-Josefin font-medium text-sm text-[#FFFFFF] px-4 py-2 bg-[#08D15F] rounded'>View Details</button>
                            </div>
                        </div>
                        <div className='text-center p-5'>
                            <p className='font-lato text-lg font-bold text-pink group-hover:text-white'>Cantilever chair</p>
                            <div className='flex gap-2 justify-center my-3'>
                                <div className='dot-green bg-[#05E6B7] rounded-sm w-3 h-1'></div>
                                <div className='dot-pink bg-[#F701A8] rounded-sm w-3 h-1'></div>
                                <div className='dot-blue bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-sm w-3 h-1'></div>
                            </div>
                            <p className='font-josefin text-sm font-normal text-[#151875] group-hover:text-white'>Code - Y523201</p>
                        </div>
                    </div>
                </div>
                <div className='w-full shadow-lg group'>
                    <div className='h-full bg-white group-hover:bg-[#2F1AC4] transition'>
                        <div className='relative flex justify-center bg-[#F6F7FB] pt-10 pb-4'>
                            <img
                                className='h-40 hover:scale-125 transition-all ease-in-out duration-700'
                                src={FeaturedImg2}
                                alt='Chair'
                            />
                            <div className='absolute cursor-pointer flex items-center gap-3 top-4 -left-52 opacity-0 group-hover:left-5 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#2F1AC4] hover:text-[#1DB4E7]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                            </div>
                            <div className='absolute bottom-4 -left-52 opacity-0 group-hover:opacity-100 group-hover:left-[30%]'>
                                <button className='font-Josefin font-medium text-sm text-[#FFFFFF] px-4 py-2 bg-[#08D15F] rounded'>View Details</button>
                            </div>
                        </div>
                        <div className='text-center p-5'>
                            <p className='font-lato text-lg font-bold text-pink group-hover:text-white'>Cantilever chair</p>
                            <div className='flex gap-2 justify-center my-3'>
                                <div className='dot-green bg-[#05E6B7] rounded-sm w-3 h-1'></div>
                                <div className='dot-pink bg-[#F701A8] rounded-sm w-3 h-1'></div>
                                <div className='dot-blue bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-sm w-3 h-1'></div>
                            </div>
                            <p className='font-josefin text-sm font-normal text-[#151875] group-hover:text-white'>Code - Y523201</p>
                            <p className='font-lato text-sm font-normal text-[#151875] group-hover:text-white mt-2'>$42.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-full shadow-lg group'>
                    <div className='h-full bg-white group-hover:bg-[#2F1AC4] transition'>
                        <div className='relative flex justify-center bg-[#F6F7FB] pt-10 pb-4'>
                            <img
                                className='h-40 hover:scale-125 transition-all ease-in-out duration-700'
                                src={FeaturedImg3}
                                alt='Chair'
                            />
                            <div className='absolute cursor-pointer flex items-center gap-3 top-4 -left-52 opacity-0 group-hover:left-5 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#2F1AC4] hover:text-[#1DB4E7]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                            </div>
                            <div className='absolute bottom-4 -left-52 opacity-0 group-hover:opacity-100 group-hover:left-[30%]'>
                                <button className='font-Josefin font-medium text-sm text-[#FFFFFF] px-4 py-2 bg-[#08D15F] rounded'>View Details</button>
                            </div>
                        </div>
                        <div className='text-center p-5'>
                            <p className='font-lato text-lg font-bold text-pink group-hover:text-white'>Cantilever chair</p>
                            <div className='flex gap-2 justify-center my-3'>
                                <div className='dot-green bg-[#05E6B7] rounded-sm w-3 h-1'></div>
                                <div className='dot-pink bg-[#F701A8] rounded-sm w-3 h-1'></div>
                                <div className='dot-blue bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-sm w-3 h-1'></div>
                            </div>
                            <p className='font-josefin text-sm font-normal text-[#151875] group-hover:text-white'>Code - Y523201</p>
                            <p className='font-lato text-sm font-normal text-[#151875] group-hover:text-white mt-2'>$42.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-full shadow-lg group'>
                    <div className='h-full bg-white group-hover:bg-[#2F1AC4] transition'>
                        <div className='relative flex justify-center bg-[#F6F7FB] pt-10 pb-4'>
                            <img
                                className='h-40 hover:scale-125 transition-all ease-in-out duration-700'
                                src={FeaturedImg4}
                                alt='Chair'
                            />
                            <div className='absolute cursor-pointer flex items-center gap-3 top-4 -left-52 opacity-0 group-hover:left-5 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#2F1AC4] hover:text-[#1DB4E7]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                                <div className='w-8 h-8 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#1DB4E7] hover:text-[#2F1AC4]' /></div>
                            </div>
                            <div className='absolute bottom-4 -left-52 opacity-0 group-hover:opacity-100 group-hover:left-[30%]'>
                                <button className='font-Josefin font-medium text-sm text-[#FFFFFF] px-4 py-2 bg-[#08D15F] rounded'>View Details</button>
                            </div>
                        </div>
                        <div className='text-center p-5'>
                            <p className='font-lato text-lg font-bold text-pink group-hover:text-white'>Cantilever chair</p>
                            <div className='flex gap-2 justify-center my-3'>
                                <div className='dot-green bg-[#05E6B7] rounded-sm w-3 h-1'></div>
                                <div className='dot-pink bg-[#F701A8] rounded-sm w-3 h-1'></div>
                                <div className='dot-blue bg-[#00009D] group-hover:bg-[#FFEAC1] rounded-sm w-3 h-1'></div>
                            </div>
                            <p className='font-josefin text-sm font-normal text-[#151875] group-hover:text-white'>Code - Y523201</p>
                            <p className='font-lato text-sm font-normal text-[#151875] group-hover:text-white mt-2'>$42.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
