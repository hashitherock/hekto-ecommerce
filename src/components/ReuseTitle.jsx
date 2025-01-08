import React from 'react'
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ReuseTitle = (props) => {
  return (
    <>
        <section className='bg-[#F6F5FF] py-24'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='font-josefin font-bold text-[#101750] text-4xl pb-2'>{props.title}</h1>
                    <div className="breadcrumbs">
                        <ul className='flex flex-row gap-1 font-lato text-base'>
                            <li>
                                <div className='flex items-center gap-1'>                                    
                                    <Link to='/'>Home</Link>
                                    <BsDot className='mt-2' />
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center'>                                    
                                    Pages
                                    <BsDot className='text-pink mt-2' />
                                </div>
                            </li>
                            <li className='text-pink'>{props.title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReuseTitle
