import React from 'react'
import ReuseTitle from '../components/ReuseTitle'
import aboutImg from '../assets/about.png'
import { Link } from 'react-router-dom'
import FeatureBox from '../components/FeatureBox'

const About = () => {
  return (
    <>
      <ReuseTitle title='About Us'></ReuseTitle>
      <section className='my-20'>
        <div className='container mx-auto relative'>
          <div className='flex gap-10 items-center justify-center w-full'>
            <div className='w-1/2'>
              <div className='w-full'>
                <div className='custom-card-style-1-image-wrapper bg-[#2B3CAB] inline-block rounded-lg'>
                  <img
                    className='w-full object-contain rounded-lg'
                    src={aboutImg}
                    alt='Photo'
                  />
                </div>
              </div>
            </div>
            <div className='w-1/2'>
              <div className=''>
                <div className='font-josefin font-bold text-4xl text-[#151875]'>
                  Know About Our Ecomerce Business, History
                </div>
                <p className='font-lato font-semibold text-base leading-7 text-[#8A8FB9] my-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                </p>
                <div className='mt-20'>
                  <Link to='/contact' className='font-lato text-lg bg-pink text-white px-6 py-3'>Contact us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-josefin text-[42px] font-bold text-black mb-10'>
                      Our Features
                    </h2>
                </div>
                <FeatureBox/>
            </div>
        </section>
    </>
  )
}

export default About
