import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const RootLayout = () => {
  return (
    <>
      <Layout/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
