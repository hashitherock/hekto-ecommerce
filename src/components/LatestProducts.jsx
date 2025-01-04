import React from 'react'
import LatestImg1 from '../assets/latest-product-1.png'
import LatestImg2 from '../assets/latest-product-2.png'
import LatestImg3 from '../assets/latest-product-3.png'
import LatestImg4 from '../assets/latest-product-4.png'
import LatestImg5 from '../assets/latest-product-5.png'
import LatestImg6 from '../assets/latest-product-6.png'

import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa6'
import { LuSearchX } from 'react-icons/lu'

const LatestProducts = () => {
  return (
    <>
      <section className='latest-products pt-10 pb-10'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-4'>
                    Latest Products
                </h2>
            </div>
            <div>
                <div class='mb-4'>
                    <ul class='flex flex-wrap items-center justify-center font-lato text-lg font-medium' id='default-tab' data-tabs-toggle='#default-tab-content' role='tablist'>
                        <li class='me-4' role='presentation'>
                            <button class='inline-block p-4 underline text-pink' id='new-arrival-tab' data-tabs-target='#new-arrival' type='button' role='tab' aria-controls='new-arrival' aria-selected='false'>New Arrival</button>
                        </li>
                        <li class='me-4' role='presentation'>
                            <button class='inline-block p-4 hover:underline text-[#151875] hover:text-pink' id='best-seller-tab' data-tabs-target='#best-seller' type='button' role='tab' aria-controls='best-seller' aria-selected='false'>Best Seller</button>
                        </li>
                        <li class='me-4' role='presentation'>
                            <button class='inline-block p-4 hover:underline text-[#151875] hover:text-pink' id='featured-tab' data-tabs-target='#featured' type='button' role='tab' aria-controls='featured' aria-selected='false'>Featured</button>
                        </li>
                        <li role='presentation'>
                            <button class='inline-block p-4 hover:underline text-[#151875] hover:text-pink' id='special-offer-tab' data-tabs-target='#special-offer' type='button' role='tab' aria-controls='special-offer' aria-selected='false'>Special Offer</button>
                        </li>
                    </ul>
                </div>
                <div id='default-tab-content'>
                    <div class='' id='new-arrival' role='tabpanel' aria-labelledby='new-arrival-tab'>
                        <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3'>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg1}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg2}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg3}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg4}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg5}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mb-6 group'>
                                <div className='h-full'>
                                    <div className='relative flex justify-center bg-[#EEEFFB] group-hover:bg-[#FFFFFF] p-4'>
                                        <img
                                            className=''
                                            src={LatestImg6}
                                            alt='Chair'
                                        />
                                        <div className='absolute cursor-pointer flex flex-col items-center gap-3 -bottom-36 left-6 opacity-0 group-hover:bottom-4 group-hover:opacity-100 duration-700 transition-all ease-in-out'>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FiShoppingCart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><FaRegHeart className='text-lg text-[#3F509E]' /></div>
                                            <div className='w-8 h-8 hover:bg-[#EEEFFB] rounded-full flex items-center justify-center'><LuSearchX className='text-lg text-[#3F509E] ' /></div>
                                        </div>
                                        <div className='absolute -top-14 left-6 opacity-0 group-hover:opacity-100 group-hover:top-8 duration-700 ease-in-out -rotate-12'>
                                            <button className='font-josefin font-semibold text-sm py-1 px-7 bg-[#3F509E] text-[#EEEFFB] rounded-tl-lg rounded-br-lg'>Sale</button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <p className='font-josefin text-base text-[#151875] border-b-2'>Comfort Handy Craft</p>
                                        <div className='flex items-center gap-3'>
                                            <span className='font-josefin text-base text-[#151875]'>$42.00</span>
                                            <span className='font-josefin text-sm text-[#FB2448] line-through'>$65.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='hidden ' id='best-seller' role='tabpanel' aria-labelledby='best-seller-tab'>
                        
                    </div>
                    <div class='hidden ' id='featured' role='tabpanel' aria-labelledby='featured-tab'>
                        
                    </div>
                    <div class='hidden ' id='special-offer' role='tabpanel' aria-labelledby='special-offer-tab'>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default LatestProducts
