import React from 'react'
import Logo from '../assets/Hekto.png'
import { IoSearch } from 'react-icons/io5';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
          <div className='container flex items-center justify-between mx-auto py-5'>
              <div className='w-1/6'>
                  <img src={Logo} alt='Hekto' />
              </div>
              <div className='w-3/6'>
                  <ul className='flex items-center gap-10'>
                      <li><Link to='/' className='block'>Home</Link></li>
                      <li className='group relative'>
                          <Link to='/' className='flex items-center gap-1 text-pink'>Pages <FaAngleDown /></Link>
                          {/* 2nd level menu */}
                          <ul className='origin-top-right invisible absolute left-1/2 -translate-x-1/2 min-w-[150px] bg-white border border-slate-200 p-2 rounded shadow-xl group-hover:visible'>
                              <li className='p-2 hover:text-pink hover:bg-slate-100'><Link to='/about' className='block'>About</Link></li>
                              <li className='p-2 hover:text-pink hover:bg-slate-100'><Link to='/faq' className='block'>FAQ</Link></li>
                          </ul>
                      </li>
                      <li><Link to='/product' className='block'>Products</Link></li>
                      <li><Link to='/blog' className='block'>Blog</Link></li>
                      <li><Link to='/shop' className='block'>Shop</Link></li>
                      <li><Link to='/contact' className='block'>Contact</Link></li>
                  </ul>
              </div>
              <div className='w-2/6 flex justify-end'>
                  <input type='text' className='border-[2px] border-r-0 border-[#E7E6EF] outline-none h-10 w-[75%] px-4' />
                  <button className='bg-pink px-3 text-white text-2xl'>
                      <IoSearch />
                  </button>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
