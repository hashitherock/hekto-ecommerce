import React from 'react'
import Logo from '../assets/Hekto.png'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='pt-10 bg-[#EEEFFB] '>
                <div className='container mx-auto'>
                    <div className='flex justify-between pb-8'>
                        <div className='w-1/3'>
                            <div className='pb-11'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='relative pb-6'>
                                <input type="emial" placeholder='Enter Email Address' className='w-full h-10 rounded-md pl-5 outline-none' />
                                <button className='w-32 h-10 bg-[#FB2E86] absolute top-0 right-0 rounded font-lato text-[#FFFFFF]'>Sign Up</button>
                            </div>
                            <div>
                                <h3 className='font-lato text-[#8A8FB9] pb-2'>Contact Info</h3>
                                <h4 className='font-lato text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-[22px] text-[#000000] pb-10'>Catagories</h4>
                            <ul className='font-lato text-[#8A8FB9] space-y-3'>
                                <li>Laptops & Computers</li>
                                <li>Cameras & Photography</li>
                                <li>Smart Phones & Tablets</li>
                                <li>Video Games & Consoles</li>
                                <li>Waterproof Headphones</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-[22px] text-[#000000] pb-10'><Link to='/faq'>Customer Care</Link></h4>
                            <ul className='font-lato text-[#8A8FB9] space-y-3'>
                                <li> <Link to='/my-account'>My Account</Link></li>
                                <li>Discount </li>
                                <li>Returns</li>
                                <li>Orders History</li>
                                <li>Order Tracking</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-josefin font-semibold text-[22px] text-[#000000] pb-10'>Pages</h4>
                            <ul className='font-lato text-[#8A8FB9] space-y-3'>
                                <li> <Link to='/blog'>Blog</Link></li>
                                <li>Browse the Shop</li>
                                <li>Category</li>
                                <li>Pre-Built Pages</li>
                                <li>Visual Composer Elements</li>
                                <li>WooCommerce Pages</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bg-[#E7E4F8] py-5'>
                    <div className='container mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='font-lato font-semibold text-[#9DA0AE]'>
                                <h4>©Webecy - All Rights Reserved</h4>
                            </div>
                            <div className='flex text-[#FFFFFF] gap-4 '>
                                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-[#151875]'>
                                    <FaFacebookF className='text-sm' />
                                </div>
                                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-[#151875]'>
                                    <AiFillInstagram className='text-sm' />
                                </div>
                                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-[#151875]'>
                                    <FaTwitter className='text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
