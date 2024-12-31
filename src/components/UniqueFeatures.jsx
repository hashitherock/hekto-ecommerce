import React from 'react'
import sofaBlue from '../assets/sofa-blue.png'
import { FaCircle } from "react-icons/fa";

const UniqueFeatures = () => {
  return (
    <>
        <section className='bg-[#F2F0FF] mb-10'>
            <div className='container mx-auto relative'>
                <div className='flex gap-10 items-center justify-center w-11/12'>
                    <div className='w-1/2'>
                        <div className='py-10'>
                            <img
                                className='w-full object-contain'
                                src={sofaBlue}
                                alt='sofa'
                            />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className=''>
                            <div className='font-josefin font-bold text-[35px]'>
                                Unique Features Of leatest & Trending Poducts
                            </div>
                            <div className='my-8 font-lato text-base text-[#ACABC3]'>
                                <div className='flex gap-4'>
                                    <div className='mt-2'><FaCircle className='text-sm text-[#F52B70]' /></div>
                                    <div className='leading-7'>All frames constructed with hardwood solids and laminates</div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='mt-2'><FaCircle className='text-sm text-[#2B2BF5]' /></div>
                                    <div className='leading-7'>Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='mt-2'><FaCircle className='text-sm text-[#2BF5CC]' /></div>
                                    <div className='leading-7'>Arms, backs and seats are structurally reinforced</div>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 mt-8'>
                                <button className='font-josefin text-lg bg-pink text-white px-6 py-3'>
                                    Add To Cart
                                </button>
                                <div>
                                    <p className='font-josefin text-sm font-semibold text-[#151875] tracking-wide'>B&B Italian Sofa</p>
                                    <p className='font-lato text-[#151875] text-sm'>$32.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default UniqueFeatures
