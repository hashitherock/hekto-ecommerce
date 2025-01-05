import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import ShopexOffer from '../components/ShopexOffer'
import UniqueFeatures from '../components/UniqueFeatures'
import TrendingProducts from '../components/TrendingProducts'
import DiscountItem from '../components/DiscountItem'
import TopCategories from '../components/TopCategories'
import Newslater from '../components/Newslater'
import BrandLogos from '../components/BrandLogos'
import LatestBlog from '../components/LatestBlog'

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
      <Newslater/>
      <BrandLogos/>
      <LatestBlog/>
    </>
  )
}

export default Home
