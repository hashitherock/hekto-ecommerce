import React from 'react'
import woodChair from '../assets/wood-chair.png'
import { GrCheckmark } from "react-icons/gr";

const DiscountItem = () => {
  return (
    <>
        <section className='discount-item pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-4'>
                        Discount Item
                    </h2>
                </div>
                <div>
                    <div class='mb-4'>
                        <ul class='flex flex-wrap items-center justify-center font-lato text-lg font-medium' id='default-tab' data-tabs-toggle='#default-tab-content' role='tablist'>
                            <li class='me-3' role='presentation'>
                                <button class='inline-block p-4 underline text-pink' id='wood-chair-tab' data-tabs-target='#wood-chair' type='button' role='tab' aria-controls='wood-chair' aria-selected='false'>Wood Chair</button>
                            </li>
                            <li class='me-3' role='presentation'>
                                <button class='inline-block p-4 hover:underline text-[#151875] hover:text-pink' id='plastic-chair-tab' data-tabs-target='#plastic-chair' type='button' role='tab' aria-controls='plastic-chair' aria-selected='false'>Plastic Chair</button>
                            </li>
                            <li class='me-3' role='presentation'>
                                <button class='inline-block p-4 hover:underline text-[#151875] hover:text-pink' id='sofa-colletion-tab' data-tabs-target='#sofa-colletion' type='button' role='tab' aria-controls='sofa-colletion' aria-selected='false'>Sofa Colletion</button>
                            </li>
                        </ul>
                    </div>
                    <div id='default-tab-content'>
                        <div class='' id='wood-chair' role='tabpanel' aria-labelledby='wood-chair-tab'>
                            <div className='flex gap-10 items-center justify-center'>                                
                                <div className='w-1/2'>
                                    <div className=''>
                                        <div className='font-josefin font-bold text-[35px] text-[#151875]'>
                                            20% Discount Of All Products
                                        </div>
                                        <p className='font-josefin text-xl text-pink font-bold tracking-wide leading-9 mt-4'>
                                            Eams Sofa Compact
                                        </p>
                                        <p className='font-lato text-[17px] leading-[30px] text-[#B7BACB] tracking-wider mt-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                                        </p>
                                        <div className='mt-7'>
                                            <ul className='grid grid-cols-2 row-span-2 gap-4 font-lato text-base tracking-wide text-[#B8B8DC]'>
                                                <li className='flex gap-1'><GrCheckmark className='text-[#7569B2] mt-1' />Material expose like metals</li>
                                                <li className='flex gap-1'><GrCheckmark className='text-[#7569B2] mt-1' />Clear lines and geomatric figures</li>
                                                <li className='flex gap-1'><GrCheckmark className='text-[#7569B2] mt-1' />Simple neutral colours.</li>
                                                <li className='flex gap-1'><GrCheckmark className='text-[#7569B2] mt-1' />Material expose like metals</li>
                                            </ul>
                                        </div>
                                        <div className='mt-8'>
                                            <button className='font-josefin text-lg bg-pink text-white px-12 py-3'>
                                            Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='py-10'>
                                        <img
                                            className='w-full object-cover'
                                            src={woodChair}
                                            alt='Wood Chair'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='hidden ' id='plastic-chair' role='tabpanel' aria-labelledby='plastic-chair-tab'>

                        </div>
                        <div class='hidden ' id='sofa-colletion' role='tabpanel' aria-labelledby='sofa-colletion-tab'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DiscountItem
