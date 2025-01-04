import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import ShopexOffer from '../components/ShopexOffer'
import UniqueFeatures from '../components/UniqueFeatures'
import TrendingProducts from '../components/TrendingProducts'
import DiscountItem from '../components/DiscountItem'
import TopCategories from '../components/TopCategories'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <UniqueFeatures/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
    </>
  )
}

export default Home
