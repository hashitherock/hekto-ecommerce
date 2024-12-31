import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import ShopexOffer from '../components/ShopexOffer'
import UniqueFeatures from '../components/UniqueFeatures'
import TrendingProducts from '../components/TrendingProducts'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueFeatures/>
      <TrendingProducts/>
    </>
  )
}

export default Home
