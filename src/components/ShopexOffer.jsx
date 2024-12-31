import React from 'react'
import ShopexImg1 from '../assets/free-delivery.png'
import ShopexImg2 from '../assets/cashback.png'
import ShopexImg3 from '../assets/premium-quality.png'
import ShopexImg4 from '../assets/24-hours-support.png'

const ShopexOffer = () => {
  return (
    <>
        <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-[#151875] mb-10'>
                        What Shopex Offer!
                    </h2>
                </div>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-8'>
                    <div className='w-full shadow text-center py-12 px-7'>
                        <div className='flex justify-center pb-7'>
                            <img src={ShopexImg1} alt='Shopex Offer' />
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-2xl text-[#151875] pb-4'>24/7 Support</h4>
                            <p className='font-lato font-semibold text-base text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-full shadow text-center py-12 px-7'>
                        <div className='flex justify-center pb-7'>
                            <img src={ShopexImg2} alt='Shopex Offer' />
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-2xl text-[#151875] pb-4'>24/7 Support</h4>
                            <p className='font-lato font-semibold text-base text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-full shadow text-center py-12 px-7'>
                        <div className='flex justify-center pb-7'>
                            <img src={ShopexImg3} alt='Shopex Offer' />
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-2xl text-[#151875] pb-4'>24/7 Support</h4>
                            <p className='font-lato font-semibold text-base text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                    <div className='w-full shadow text-center py-12 px-7'>
                        <div className='flex justify-center pb-7'>
                            <img src={ShopexImg4} alt='Shopex Offer' />
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-2xl text-[#151875] pb-4'>24/7 Support</h4>
                            <p className='font-lato font-semibold text-base text-[#1a0b5b5f]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ShopexOffer
