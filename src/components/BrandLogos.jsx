import React from 'react'
import BrandImgs from '../assets/brand-logos.png'

const BrandLogos = () => {
  return (
    <>
        <section className='pt-10 pb-10'>
            <div className='container mx-auto'>
                <div className=''>
                    <img className='mx-auto'src={BrandImgs} alt="Brand Logos" />
                </div>
            </div>
        </section>
    </>
  )
}

export default BrandLogos
