import React from 'react'
import { FaRegEnvelope, FaRegHeart   } from "react-icons/fa";
import { FiPhoneCall, FiUser, FiShoppingCart  } from "react-icons/fi";
import { BiCart } from "react-icons/bi";


const HeaderTop = () => {
  return (
      <section className="bg-[#7E33E0]">
          {/* ===== Top Header ===== */}
          <div className="container bg-primary h-auto mx-auto text-white">
              <div className="flex justify-between py-[15px] items-center">
                  <div className="w-[40%] flex gap-x-10">
                      <div className="flex gap-x-2 items-center text-[16px] font-josefin">
                          <FaRegEnvelope />
                          <h3>hashitherock@gmail.com</h3>
                      </div>
                      <div className="flex gap-x-2 items-center text-[16px] font-josefin">
                          <FiPhoneCall />
                          <h3>+880 1533412566</h3>
                      </div>
                  </div>
                  <div className="w-[60%] flex justify-end text-end font-josefin">
                      <ul className='flex gap-x-6'>
                          <li>
                              <select name="" className='bg-primary outline-none'>
                                  <option value="English">English</option>
                                  <option value="Bengali">Bengali</option>
                              </select>
                          </li>
                          <li>
                              <select name="" className='bg-primary outline-none'>
                                  <option value="USD">USD</option>
                                  <option value="BDT">BDT</option>
                              </select>
                          </li>
                          <li className='flex gap-x-2 items-center'>Login <FiUser /></li>
                          <li className='flex gap-x-2 items-center'>Wishlist <FaRegHeart /></li>
                          <li className='text-[20px] items-center'><FiShoppingCart /></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default HeaderTop
