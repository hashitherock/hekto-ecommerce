import React from 'react'
import Logo from '../assets/Hekto.png'
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='container flex items-center justify-between mx-auto py-5'>
              <div className='w-1/6'>
                  <img src={Logo} alt='Hekto' />
              </div>              
              <div className='w-3/6'>
                  <ul className='flex gap-10 items-center'>
                     <li className='flex gap-1 items-center text-pink'>Home <FaAngleDown /></li>
                     <li>Pages</li>
                     <li>Products</li>
                     <li>Blog</li>
                     <li>Shop</li>
                     <li>Contact</li>
                  </ul>
              </div>
              <div className='w-2/6 flex justify-end'>
                  <input type='text' className='border-[2px] border-r-0 border-[#E7E6EF] outline-none h-10 w-[75%]'/>
                  <button className="bg-pink px-3 text-white text-2xl">
                  <IoSearch />
                  </button>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
